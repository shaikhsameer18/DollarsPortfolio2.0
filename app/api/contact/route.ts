import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email too long")
    .toLowerCase(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject too long")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long — please keep it under 2000 characters")
    .trim(),
  _trap: z.string().max(0, "Bot detected").optional(),
});

interface RateRecord {
  count:   number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateRecord>();

const RATE_LIMIT_MAX    = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function purgeExpired(): void {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore) {
    if (now > record.resetAt) rateLimitStore.delete(ip);
  }
}

function isRateLimited(ip: string): boolean {
  purgeExpired();

  const now   = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

const rawOrigins = [
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://dollarsportfolio.vercel.app",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
].filter(Boolean) as string[];

const ALLOWED_ORIGINS = new Set(rawOrigins);

function isOriginAllowed(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return ALLOWED_ORIGINS.has(origin);
}

const SECURITY_HEADERS = {
  "Cache-Control":          "no-store, no-cache, must-revalidate",
  "X-Content-Type-Options": "nosniff",
};

export async function POST(request: NextRequest) {
  if (!isOriginAllowed(request)) {
    return NextResponse.json(
      { error: "Forbidden." },
      { status: 403, headers: SECURITY_HEADERS }
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Invalid content type." },
      { status: 415, headers: SECURITY_HEADERS }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "127.0.0.1";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { ...SECURITY_HEADERS, "Retry-After": "3600" } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400, headers: SECURITY_HEADERS }
    );
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", fields: parsed.error.flatten().fieldErrors },
      { status: 422, headers: SECURITY_HEADERS }
    );
  }

  const { name, email, subject, message, _trap } = parsed.data;

  if (_trap) {
    return NextResponse.json({ ok: true }, { headers: SECURITY_HEADERS });
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.error("[contact] FORMSPREE_ENDPOINT is not configured.");
    return NextResponse.json(
      { error: "Contact service is not configured." },
      { status: 503, headers: SECURITY_HEADERS }
    );
  }

  let formspreeRes: Response;
  try {
    formspreeRes = await fetch(endpoint, {
      method:  "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });
  } catch (err) {
    console.error("[contact] Formspree request failed:", err);
    return NextResponse.json(
      { error: "Failed to deliver message. Please try again." },
      { status: 502, headers: SECURITY_HEADERS }
    );
  }

  if (!formspreeRes.ok) {
    console.error("[contact] Formspree returned status:", formspreeRes.status);
    return NextResponse.json(
      { error: "Failed to deliver message. Please try again." },
      { status: 502, headers: SECURITY_HEADERS }
    );
  }

  return NextResponse.json({ ok: true }, { headers: SECURITY_HEADERS });
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405, headers: { ...SECURITY_HEADERS, Allow: "POST" } }
  );
}

export async function PUT()    { return GET(); }
export async function PATCH()  { return GET(); }
export async function DELETE() { return GET(); }
