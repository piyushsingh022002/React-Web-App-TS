import React from "react";
import styled from "styled-components";
import Card from "../common/Card";
import { CardData } from "../../types/Card";

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 2rem 0;
`;

interface CardListProps {
  cards: CardData[];
  onCardClick: (id: number) => void;
}

const CardList: React.FC<CardListProps> = ({ cards, onCardClick }) => {
  return (
    <CardGrid>
      {cards.map((card) => (
        <Card key={card.id} data={card} onClick={onCardClick} />
      ))}
    </CardGrid>
  );
};

export default CardList;
