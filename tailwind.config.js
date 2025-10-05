module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  important: true,

  theme: {
    extend: {
      colors: {
        // Couleurs du thème 3D/DEV/HACKING
        'cyber': {
          'primary': '#00DDEB',
          'secondary': '#9B00FF',
          'accent-blue': '#00BFFF',
          'accent-purple': '#8A2BE2',
          'background': '#1A1A1A',
          'background-secondary': '#0F0F0F',
          'text': '#E6E6FA',
          'text-secondary': '#B0E0E6',
        },
        // Variantes avec opacité
        'neon': {
          'blue': '#00DDEB',
          'purple': '#9B00FF',
          'cyan': '#00BFFF',
          'violet': '#8A2BE2',
        }
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-blue': '0 0 5px #00DDEB, 0 0 10px #00DDEB, 0 0 15px #00DDEB',
        'neon-purple': '0 0 5px #9B00FF, 0 0 10px #9B00FF, 0 0 15px #9B00FF',
        'cyber': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(0, 221, 235, 0.1)',
        'cyber-glow': '0 5px 15px rgba(0, 221, 235, 0.4), 0 0 20px #00DDEB',
      },
      textShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-blue': '0 0 5px #00DDEB, 0 0 10px #00DDEB, 0 0 15px #00DDEB',
        'neon-purple': '0 0 5px #9B00FF, 0 0 10px #9B00FF, 0 0 15px #9B00FF',
      },
      fontFamily: {
        'cyber': ['Courier New', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
        'float-cyber': 'float-cyber 3s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor'
          },
          '50%': {
            opacity: '0.8',
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor, 0 0 12px currentColor'
          }
        },
        'cyber-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #00DDEB, 0 0 10px #00DDEB, 0 0 15px #00DDEB'
          },
          '50%': {
            boxShadow: '0 0 10px #00DDEB, 0 0 20px #00DDEB, 0 0 30px #00DDEB'
          }
        },
        'float-cyber': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      }
    },
  },
  safelist: [
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|rose)-[1-9]00/,
    },
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|rose)-[1-9]00/,
    },
    {
      pattern: /border-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|rose)-[1-9]00/,
    },
    // Nouvelles classes pour le thème cyber
    {
      pattern: /text-cyber-(primary|secondary|accent-blue|accent-purple|background|background-secondary|text|text-secondary)/,
    },
    {
      pattern: /bg-cyber-(primary|secondary|accent-blue|accent-purple|background|background-secondary|text|text-secondary)/,
    },
    {
      pattern: /border-cyber-(primary|secondary|accent-blue|accent-purple|background|background-secondary|text|text-secondary)/,
    },
    {
      pattern: /text-neon-(blue|purple|cyan|violet)/,
    },
    {
      pattern: /bg-neon-(blue|purple|cyan|violet)/,
    },
    {
      pattern: /border-neon-(blue|purple|cyan|violet)/,
    },
    {
      pattern: /shadow-(neon|neon-blue|neon-purple|cyber|cyber-glow)/,
    },
    {
      pattern: /animate-(neon-pulse|cyber-glow|float-cyber)/,
    }
  ],
  plugins: [],
}
