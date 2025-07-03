import React from "react";
import styled from "styled-components";
import { CardData } from "../../types/Card";

interface CardProps {
  data: CardData;
  onClick: (id: number) => void;
}

const CardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ data, onClick }) => {
  return (
    <CardWrapper onClick={() => onClick(data.id)}>
      <Image src={data.imageUrl} alt={data.title} />
      <Content>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Content>
    </CardWrapper>
  );
};

export default Card;
