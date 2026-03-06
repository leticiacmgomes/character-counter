import { styled } from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 500px) {
    padding: 2rem 3rem;
  }


  @media screen and (min-width: 1200px) {
    padding: 2rem 8rem;
  }

  @media screen and (min-width: 1380px){
    padding: 3rem 14.5rem;
    gap: 2.5rem;
  }
`;
