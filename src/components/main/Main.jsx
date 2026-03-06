import { useCharacterCounterStore } from "../../store/characterCounterStore";
import { Options } from "./options/Options";
import { TextArea, Hint } from "./Main.styles";

export const Main = () => {
  const { text, setText, isCharacterLimitActive, characterLimit } =
    useCharacterCounterStore();

  return (
    <>
      <TextArea
        maxLength={isCharacterLimitActive ? characterLimit : undefined}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {isCharacterLimitActive &&
        characterLimit &&
        text.length >= characterLimit && <Hint>Limit reached! Your text exceeds {characterLimit} characters.</Hint>}
      <Options />
    </>
  );
};
