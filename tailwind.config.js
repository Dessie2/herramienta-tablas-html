/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pop: {
          '0%': { transform: 'scale(.3)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        pop: 'pop .4s ease',
        'fade-up': 'fade-up .5s ease both',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      /*Arreglo de colores variables */
      colors:{
        guinda: "#611232", /* coloe guinda para botones y hovers*/ 
        amarillo: "#D19800", /*Color amarillo para resaltado de textos */
        azul: "#1B396A", /*Color azul para botones, interfaces, textos y hovers */
        grisbg: "#ecf0f5", /*Gris claro para fondo de las pantallas */
        griscroll: "#1E1E2E", /*Gris obscuro para los ejemplos de código */
        iconos: "#E2E8F0", /* Gris para los iconos desactivados */
        blanco: "#FFFFFF", /*Color blanco general */
      },
    }
  },
  plugins: [],
}
