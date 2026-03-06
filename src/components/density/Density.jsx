import { useState } from "react";
import { useCharacterCounterStore } from "../../store/characterCounterStore";
import { DensityListItem } from "./density-list-item/DensityListItem";
import {
  DensityContainer,
  Header,
  DensityList,
  SeeMore,
} from "./Density.styles";

export const Density = () => {
  const [isMoreActive, setIsMoreActive] = useState(false);
  const { text } = useCharacterCounterStore();

  const densityMap = () => {
    const txt = text.replaceAll(" ", "");
    const counter = {};

    for (let letter of txt) {
      counter[letter] = (counter[letter] || 0) + 1;
    }

    const result = Object.entries(counter)
      .map(([letter, count]) => ({
        letter,
        count,
      }))
      .sort((a, b) => b.count - a.count);

    return isMoreActive ? result : result.slice(0, 5);
  };

  const toggleIsMoreActive = () => {
    setIsMoreActive(!isMoreActive);
  };

  return (
    <>
      <Header>letter density</Header>
      {text ? (
        <>
          <DensityList>
            {densityMap().map((item) => (
              <DensityListItem key={item.letter} item={item} />
            ))}
          </DensityList>
          <SeeMore onClick={toggleIsMoreActive}>
            {isMoreActive ? "See less ^" : "See more ⌄"}
          </SeeMore>
        </>
      ) : (
        <p>No characters found. Start typing to see letter density.</p>
      )}
    </>
  );
};
