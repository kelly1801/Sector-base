

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'sector': "url('../images/img-2.png')"
        
       },

       colors: {
      'dark-blue': '#0B1D26',
      "brigth-yellow": '#FDD130'
      },

      height: {
        'hst': '720px',
        
       },    
       
       width: {
        'wst': '566px',
        
      },

      fontSize: {
        'xxs': ['18px', '32px'],
        'm':['64px', '20px'],
        'big': ['240px', '20px'],
        'mm': '124px',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
