import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${({ selected }) => (selected ? "#007BFF" : "#ccc")};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#0056b3" : "#aaa")};
  }
`;

interface FilterMenuProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <FilterWrapper>
      {["All", ...categories].map((cat) => (
        <FilterButton
          key={cat}
          selected={selectedCategory === cat}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

export default FilterMenu;
