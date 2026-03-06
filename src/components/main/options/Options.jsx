import { useCharacterCounterStore } from "../../../store/characterCounterStore";
import {
  OptionsContainer,
  Option,
  ApproxReadingTime,
  Check,
  CharacterLimit,
} from "./Option.styles";

export const Options = () => {
  const { isExcludeSpacesActive, setIsExcludeSpacesActive, characterLimit, isCharacterLimitActive, setCharacterLimitActive, setCharacterLimit } =
    useCharacterCounterStore();
  return (
    <OptionsContainer>
      <Option>
        <Check
          type="checkbox"
          id="exclude-spaces"
          onChange={(e) => setIsExcludeSpacesActive(e.target.checked)}
          checked={isExcludeSpacesActive}
        />
        exclude spaces
      </Option>
      <Option>
        <Check
          type="checkbox"
          id="set limit"
          onChange={(e) => setCharacterLimitActive(e.target.checked)}
          checked={isCharacterLimitActive}
        />
        set character limit
        {isCharacterLimitActive && <CharacterLimit onChange={(e) => (setCharacterLimit(e.target.value))} type="number" id="character-limit" value={characterLimit} />}
      </Option>
      <ApproxReadingTime>Approx. reading time: {"<"}1 minute</ApproxReadingTime>
    </OptionsContainer>
  );22222222222222222222222222222
};
 