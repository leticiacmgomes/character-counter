import { styled } from "styled-components";
import iconInfo from '../../assets/images/icon-info.svg'

export const TextArea = styled.textarea`
  appearance: none;
  width: 100%;
  height: 200px;
  padding: 1rem;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.textAreaBg};
  border-radius: 12px;
  border: solid 2px ${({ theme }) => theme.colors.textAreaBorder};
`;

export const Hint = styled.p`
  font-size: 16px;
  color: #FE8159;
  padding-left: 1.5rem;
  background: url("${iconInfo}") no-repeat left center;
`;

