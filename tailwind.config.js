module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      // borderBottomLeftRadius: '50% 20%',
      // borderBottomRightRadius: '50% 20%',
      borderRadius: {
        'b-curved': '50% 20%'
      },
      backgroundColor: {
        'blue-ref': '#4285F4'
      },
      width: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      }
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
