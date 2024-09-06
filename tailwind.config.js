/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    theme: {
      extend: {
        colors: {
          // Agrega un color púrpura azulado
          'blue-purple': {
            light: '#0056b3', // tono más claro
            DEFAULT: '#002e3d', // tono base
            dark: '#00212c', // tono más oscuro
          },
          // Colores dorados
          gold: {
            light: '#f6efe8', // tono más claro
            DEFAULT: '#ffb57e', // tono base dorado
            dark: '#ff862c', // tono más oscuro
          },
          // Otros colores de fondo personalizados
          'soft-gray': '#F1F1F1', // gris suave
          'dark-blue': '#0A1A2F', // azul oscuro profundo
        },
      },
    },

  plugins: [],
}
