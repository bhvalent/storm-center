const colors = {
  blue: '#3E6EB6',
  lightBlue: '#23E8E1',
  yellow: '#FFE552',
  veryDarkGrey: '#3D3D3D',
  darkGrey: '#474747',
  mediumGrey: '#666666',
  lightGrey: '#858585',
  veryLightGrey: '#A3A3A3',
  black: '#302F2F',
  white: '#efefef',
  red: '#DC3333'
};

const darkTheme = {
  dark: true,
  colors: {
    primary: colors.yellow,
    background: colors.black,
    card: colors.blue,
    text: colors.white,
    border: colors.lightGrey,
    notification: colors.lightBlue
  }
};

export function getColors() {
  return colors;
}

export function getDarkTheme() {
  return darkTheme;
}