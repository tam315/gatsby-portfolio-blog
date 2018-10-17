import Typography from 'typography';

const typography = new Typography({
  bodyColor: '#262626',
  baseFontSize: '16px',
  bodyFontFamily: [
    'Noto Sans JP',
    // refer: https://munyagu.com/2094/
    '游ゴシック Medium', // win
    'Yu Gothic Medium', // win
    '游ゴシック体', // mac
    'YuGothic', // mac
    'メイリオ', // win 7
    'sans-serif',
  ],
  headerColor: '#262626',
  headerFontFamily: [
    'Noto Sans JP',
    '游ゴシック Medium', // win
    'Yu Gothic Medium', // win
    '游ゴシック体', // mac
    'YuGothic', // mac
    'メイリオ', // win 7
    'sans-serif',
  ],
  overrideStyles: () => ({
    'ul, li': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    'h1, h2, h3': {
      textAlign: 'center',
    },
    img: {
      margin: 0,
    },
  }),
});

const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
