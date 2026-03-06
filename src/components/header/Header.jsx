import { useThemeStore } from "../../store/themeStore";
import { HeaderContainer, Logo, Icon, Title } from "./Header.styles";

export const Header = () => {
  const { toggleTheme } = useThemeStore();
  return (
    <HeaderContainer>
      <Logo />
      <Icon onClick={toggleTheme} />
      <Title>Analyze your text in real-time.</Title>
    </HeaderContainer>
  );
};
