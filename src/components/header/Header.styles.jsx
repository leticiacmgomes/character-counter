import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.mainText};
  display: grid;
  grid-template: auto auto / auto auto;
  grid-template-areas:
    "logo icon"
    "title title";
  row-gap: 2rem;
`;

export const Logo = styled.div`
  width: 311px;
  height: 30px;
  background: url("${({ theme }) => theme.images.logo}") no-repeat;
  grid-area: logo;
  justify-self: start;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: url("${({ theme }) => theme.images.icon}") no-repeat center;
  background-color: ${({ theme }) => theme.colors.iconBg};
  grid-area: icon;
  justify-self: end;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  justify-self: center;
  text-align: center;
  grid-area: title;
  max-width: 510px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;
