module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Press Start 2P"', 'sans-serif'],
      },
      animation: {
        chill: 'chill 1s infinite;',
        shadow: 'shadow 1s infinite;',
        'shadow-interact': 'shadow-interact 1s infinite;',
        right: 'right 0.5s 1 cubic-bezier(0.8, 0, 1, 1) forwards;',
        left: 'left 0.5s 1 cubic-bezier(0.8, 0, 1, 1) forwards;',
      },
      keyframes: {
        chill: {
          '0%, 100%': {
            transform: 'translateY(-5px)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        shadow: {
          '0%, 100%': {
            width: '2rem',
            opacity: '0.4',
            transform: 'rotateX(70deg)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            width: '2.5rem',
            opacity: '0.5',
            transform: 'rotateX(68deg)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'shadow-interact': {
          '0%, 100%': {
            width: '2rem',
            opacity: '0.4',
            transform: 'rotateX(70deg)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            width: '2.5rem',
            opacity: '0.5',
            transform: 'rotateX(68deg)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        right: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateY(180deg)',
          },
        },
        left: {
          '0%': {
            transform: 'rotateY(180deg)',
          },
          '100%': {
            transform: 'rotateY(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
