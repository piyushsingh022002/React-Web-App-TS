import { styled } from "styled-components";

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;

    @media (max-width: 768px) {
        padding: 0.5rem 0;
    }
    `;
const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;    

const Header:React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </HeaderContainer>

    );
};

export default Header;