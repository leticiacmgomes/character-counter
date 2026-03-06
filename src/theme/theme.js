import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import logoDarkTheme from "../assets/images/logo-dark-theme.svg";
import logoLightTheme from "../assets/images/logo-light-theme.svg";

export const darkTheme = {
  colors: {
    body: "#12131A",
    mainText: "#ffffff",
    iconBg: "#2A2B37",
    textAreaBg: "#21222C",
    textAreaBorder: "#2A2B37",
    checkBorder: '#FFFFFF',
    densityProgressBarBg: '#21222C', 
  },
  images: {
    icon: iconSun,
    logo: logoDarkTheme,
  },
};

export const lightTheme = {
  colors: {
    body: "#FFFFFF",
    mainText: "#12131A",
    iconBg: "#F2F2F7",
    textAreaBg: "#F2F2F7 ",
    textAreaBorder: "#E4E4EF",
    checkBorder: '#12131A',
    densityProgressBarBg: '#F2F2F7'
  },
  images: {
    icon: iconMoon,
    logo: logoLightTheme,
  },
};
