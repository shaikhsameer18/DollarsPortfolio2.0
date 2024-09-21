import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">&copy; 2024 Sameer Ahmed. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/yourusername" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}