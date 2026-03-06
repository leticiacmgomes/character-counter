import { styled } from "styled-components";

export const DensityListItemContainer = styled.li`
  display: grid;
  grid-template-columns: 16px auto 110px;
  gap: 0.5rem;
`;

export const ProgressBar = styled.span`
  height: 12px;
  background-color: ${({ theme }) => theme.colors.densityProgressBarBg};
  border-radius: 999px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    height: 100%;
    width: ${({ $percentage }) => $percentage}%;
    border-radius: 999px;
    background-color: #d3a0fa;
    position: absolute;
    z-index: 2;
  }
`;
