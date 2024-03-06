

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',

  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3e64ff',
      },
      boxShadow: {
        'custom-underline': '0 1px 0 0 #4a90e2',
      },

    },
  },
  plugins: [
        require('flowbite/plugin')
    ]
}

