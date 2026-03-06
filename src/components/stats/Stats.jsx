import { useCharacterCounterStore } from "../../store/characterCounterStore";
import { StatsContainer, StatContainer, StatData } from "./Stats.styles";

import patternCharacterCount from "../../assets/images/pattern-character-count.svg";
import patternSentenceCount from "../../assets/images/pattern-sentence-count.svg";
import patternWordCount from "../../assets/images/pattern-word-count.svg";

export const Stats = () => {
  const { text, isExcludeSpacesActive } = useCharacterCounterStore();
  const characterCount = isExcludeSpacesActive
    ? text.replaceAll(" ", "").length
    : text.length;
  const wordCount = text.length > 1 ? text.split(" ").length : 0;
  const sentenceCount = text.length > 1 ? text.split(".").length : 0;

  const stats = [
    {
      id: "character count",
      data: characterCount,
      bgColor: "#D3A0FA",
      label: "total characters",
      pattern: patternCharacterCount,
    },
    {
      id: "word count",
      data: wordCount,
      bgColor: "#FF9F00 ",
      label: "word count",
      pattern: patternWordCount,
    },
    {
      id: "sentence count",
      data: sentenceCount,
      bgColor: "#FE8159",
      label: "sentence count",
      pattern: patternSentenceCount,
    },
  ];
  return (
    <StatsContainer>
      {stats.map(({ id, data, bgColor, label, pattern }) => (
        <StatContainer key={id} $pattern={pattern} $bgColor={bgColor}>
          <StatData>{data < 10 ? "0" + data : data}</StatData>
          {label}
        </StatContainer>
      ))}
    </StatsContainer>
  );
};
