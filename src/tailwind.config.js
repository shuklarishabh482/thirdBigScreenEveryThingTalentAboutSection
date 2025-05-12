
// tailwind.config.js

module.exports = {
    darkMode: 'class', // <--- REQUIRED
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
extend : {
  animation : {
     'slide-up': 'slideUp 1.5s ease-out',
  },
 keyframes: {
    slideUp: {
      '0%': { transform: 'translateY(100%)' },
      '100%': { transform: 'translateY(0%)' },
    },
  },

}
  };
  
