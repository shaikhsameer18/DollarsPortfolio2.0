export const sharedStyles = {
  // Layout
  pageContainer: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative",
  maxWidthContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10",
  
  // Typography
  sectionTitle: "text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  sectionSubtitle: "text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
  heading: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white",
  text: "text-gray-600 dark:text-gray-300",
  
  // Components
  card: "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 p-6 hover:shadow-xl transition-all duration-300",
  iconContainer: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400",
  iconWrapper: "p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors",
  
  // Form Elements
  input: "w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white transition-all duration-300",
  button: "inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105",
  
  // Tags and Badges
  tag: "px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors",
  badge: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  
  // Grid Layouts
  grid: {
    twoCol: "grid grid-cols-1 lg:grid-cols-2 gap-8",
    threeCol: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  },
  
  // Animations
  animation: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    slideIn: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    }
  },
  
  // Background Effects
  backgroundEffects: {
    pattern: "absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10",
    gradient: "absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-gray-800/50",
    blur: "backdrop-blur-sm"
  }
}; 