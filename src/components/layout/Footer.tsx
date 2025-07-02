import React from "react";
import styled from "styled-components";

interface FooterProps {
  year: number;
  brand: string;
}

const FooterContainer = styled.footer`
  margin-top: 10rem;
  padding: 1rem 0;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  border-top: 1px solid #ccc;
`;

const Footer: React.FC<FooterProps> = ({ year, brand }) => {
  return (
    <FooterContainer>
      © {year} {brand}. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
