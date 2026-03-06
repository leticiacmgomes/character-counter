import { styled } from "styled-components";
import iconCheck from "../../../assets/images/icon-check.svg";

export const OptionsContainer = styled.div`
  display: grid;
  gap: 0.8rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
`;

export const Option = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
`;

export const ApproxReadingTime = styled.p`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    justify-self: end;
  }
`;

export const Check = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  background: transparent;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.checkBorder};
  cursor: pointer;
  &:checked {
    background: url("${iconCheck}") center #d3a0fa;
    border: none;
  }
`;

export const CharacterLimit = styled.input`
  appearance: none;
  font-size: 16px;
  text-align: center;
  width: 55px;
  height: 29px;
  background-color: transparent;
  border-radius: 6px;
  border: solid #404254 1px;
  padding: 0.3rem;
  color: white;
`;
