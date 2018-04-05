import Typography from "typography";

const typography = new Typography({
  bodyColor: '#262626',
  baseFontSize: "16px",
  bodyFontFamily: ['Noto Sans CJK JP'],
  headerColor: '#262626',
  headerFontFamily: ['Noto Sans CJK JP'],
  overrideStyles: () => {
    return {
      'ul, li': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      'h1, h2, h3': {
        fontWeight: 400, 
        textAlign: 'center',
        // margin: 0,
      },
      'img': {
        margin: 0,
      },
    }
  },
});

export default typography;