import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CardList from "./components/featureSpecific/CardList";
import FilterMenu from "./components/common/FilterMenu";
import { CardData } from "./types/Card";

const allCards: CardData[] = [
  {
    id: 1,
    title: "React",
    description: "Learn to build components",
    imageUrl: "https://source.unsplash.com/300x180/?react",
    category: "Frontend"
  },
  {
    id: 2,
    title: "TypeScript",
    description: "Type-safe components",
    imageUrl: "https://source.unsplash.com/300x180/?typescript",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Styled Components",
    description: "CSS in JS",
    imageUrl: "https://source.unsplash.com/300x180/?css",
    category: "Styling"
  },
  {
    id: 4,
    title: "Node.js",
    description: "Backend with JavaScript",
    imageUrl: "https://source.unsplash.com/300x180/?node",
    category: "Backend"
  },
  {
    id: 5,
    title: "MongoDB",
    description: "NoSQL database",
    imageUrl: "https://source.unsplash.com/300x180/?mongodb",
    category: "Database"
  }
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCards =
    selectedCategory === "All"
      ? allCards
      : allCards.filter((card) => card.category === selectedCategory);

  const categories = [...new Set(allCards.map((card) => card.category))];

  const handleCardClick = (id: number) => {
    alert(`Card with ID ${id} clicked`);
  };

  return (
    <Layout>
      <Header title="React TS Web" subtitle="Filtering with State & Props" />
      
      <FilterMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <CardList cards={filteredCards} onCardClick={handleCardClick} />

      <Footer year={2025} brand="Piyush Inc." />
    </Layout>
  );
};

export default App;
