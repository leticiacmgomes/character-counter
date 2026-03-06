import { useCharacterCounterStore } from "../../../store/characterCounterStore";
import {
  DensityListItemContainer,
  ProgressBar,
} from "./DensityListItem.styles";

export const DensityListItem = ({ item }) => {
  const { text } = useCharacterCounterStore();
  const { letter, count } = item;
  const percentage = (count / text.replaceAll(" ", "").length) * 100;
  return (
    <DensityListItemContainer>
      {letter}
      <ProgressBar $percentage={percentage} />
      <span style={{justifySelf: 'end'}}>{count} ({percentage.toFixed(2)}%)</span>
    </DensityListItemContainer>
  );
};
