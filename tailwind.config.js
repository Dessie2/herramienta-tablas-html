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
        }
      },
      animation: {
        pop: 'pop .4s ease',
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
