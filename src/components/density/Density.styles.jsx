import { styled } from "styled-components";

export const DensityContainer = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
  text-transform: capitalize;
`;

export const DensityList = styled.ul`
  display: grid;
  gap: 1rem;
`;

export const SeeMore = styled.p`
  width: fit-content;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mainText};
  cursor: pointer;
`;
