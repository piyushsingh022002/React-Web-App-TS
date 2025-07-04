import { styled } from "styled-components";
import { CardData } from "../../types/Card";

interface ModalProps {
    card:CardData | null;
    onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ModalContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 600px;
  margin: 10vh auto;
  padding: 2rem;
  border-radius: 12px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-top: 1rem;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  color: #444;
`;

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
    if(!card) return null;

    return (
        <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage src={card.imageUrl} alt={card.title} />
        <Title>{card.title}</Title>
        <Description>{card.description}</Description>
        <p><strong>Category:</strong> {card.category}</p>
      </ModalContainer>
    </Backdrop>
    )
}

export default Modal;