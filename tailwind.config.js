/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/index.js',
    './pages/admin/index.js',
    './pages/blogs/[id].js',
    './components/Navbar.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
