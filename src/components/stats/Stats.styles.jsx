import { styled } from "styled-components";

export const StatsContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
`;

export const StatContainer = styled.div`
  font-size: 16px;
  text-transform: capitalize;
  height: 130px;
  padding: 1.5rem;
  background: url("${({ $pattern }) => $pattern}") no-repeat center
    right -3.5rem;
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  color: #12131a;
`;

export const StatData = styled.strong`
  font-size: 40px;
  font-weight: 700;
`;
