/** @type {import('tailwindcss').Config} */

const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...default_theme.fontFamily.sans],
        inter: ['Inter', 'sans-serif'],
        notosans: ['Noto Sans', 'sans-serif'],
        display: ['Noto Sans Display', 'sans-serif'],
        mono: ['Noto Sans Mono', 'monospace'],
        symbols: ['Noto Sans Symbols', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        open: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'sans-serif'],
        gill: ['Gill Sans', 'sans-serif'],
        avantgarde: ['Avantgarde', 'sans-serif'],
        optima: ['Optima', 'sans-serif'],
        narrow: ['Arial Narrow', 'sans-serif'],
        times: ['Times New Roman', 'serif'],
        didot: ['Didot', 'serif'],
        georgia: ['Georgia', 'serif'],
        palatino: ['Palatino', 'serif'],
        bookman: ['Bookman', 'serif'],
        century: ['New Century Schoolbook', 'serif'],
        american: ['American Typewriter', 'serif'],
        andale: ['Andale Mono', 'monospace'],
        courier: ['Courier New', 'monospace'],
        lucida: ['Lucida Console', 'monospace'],
        monaco: ['Monaco', 'monospace'],
        calibri: ['Calibri', 'sans-serif'],
        candara: ['Candara', 'sans-serif'],
        cambria: ['Cambria', 'serif'],
        constantia: ['Constantia', 'serif'],
        corbel: ['Corbel', 'sans-serif'],
        franklin: ['Franklin Gothic Medium', 'sans-serif'],
        garamond: ['Garamond', 'serif'],
        geneva: ['Geneva', 'sans-serif'],
        goudy: ['Goudy Old Style', 'serif'],
        consolas: ['Consolas', 'monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/forms')]
}
