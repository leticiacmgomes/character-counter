import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { useThemeStore } from "./store/themeStore";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { AppContainer } from "./App.styles";
import { Stats } from "./components/stats/Stats";
import { Density } from "./components/density/Density";

export const App = () => {
  const { isDarkTheme } = useThemeStore();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <Header />
        <Main />
        <Stats />
        <Density />
      </AppContainer>
    </ThemeProvider>
  );
};
