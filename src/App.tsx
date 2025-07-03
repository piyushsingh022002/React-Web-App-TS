import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CardList from "./components/featureSpecific/CardList";
import { CardData } from "./types/Card";

const cards: CardData[] = [
  {
    id: 1,
    title: "React",
    description: "Learn to build components",
    imageUrl: "https://source.unsplash.com/300x180/?react"
  },
  {
    id: 2,
    title: "TypeScript",
    description: "Type-safe components",
    imageUrl: "https://source.unsplash.com/300x180/?typescript"
  },
  {
    id: 3,
    title: "Styled Components",
    description: "CSS in JS",
    imageUrl: "https://source.unsplash.com/300x180/?css"
  }
];

const App = () => {
  const handleCardClick = (id: number) => {
    alert(`Card with ID ${id} clicked`);
  };

  return (
    <Layout>
      <Header title="React TS Web" subtitle="Props, Components, and Events" />
      
      <CardList cards={cards} onCardClick={handleCardClick} />

      <Footer year={2025} brand="Piyush Inc." />
    </Layout>
  );
};

export default App;
