import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CardList from "./components/featureSpecific/CardList";
import FilterMenu from "./components/common/FilterMenu";
import { CardData } from "./types/Card";
import Modal from "./components/common/Modal";
import myImage1 from "./assets/images/image1.jpg";
import myImage2 from "./assets/images/image2.jpg";
import myImage3 from "./assets/images/image3.jpg";
import myImage4 from "./assets/images/image4.jpg";
import myImage5 from "./assets/images/image5.jpg";
import CardForm from "./components/featureSpecific/CardForm";

const allCards: CardData[] = [
  {
    id: 1,
    title: "React",
    description: "Learn to build components",
    imageUrl: myImage1,
    category: "Frontend",
  },
  {
    id: 2,
    title: "TypeScript",
    description: "Type-safe components",
    imageUrl: myImage2,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Styled Components",
    description: "CSS in JS",
    imageUrl: myImage3,
    category: "Styling",
  },
  {
    id: 4,
    title: "Node.js",
    description: "Backend with JavaScript",
    imageUrl: myImage4,
    category: "Backend",
  },
  {
    id: 5,
    title: "MongoDB",
    description: "NoSQL database",
    imageUrl: myImage5,
    category: "Database",
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [cards, setCards] = useState<CardData[]>(allCards);

  const filteredCards =
    selectedCategory === "All"
      ? allCards
      : allCards.filter((card) => card.category === selectedCategory);

  const categories = [...new Set(allCards.map((card) => card.category))];

  const handleCardClick = (id: number) => {
    const found = allCards.find((card) => card.id === id);
    if (found) setSelectedCard(found);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleCreateCard = (newCard: CardData) => {
    console.log("Adding card to list:", newCard);
    setCards((prev) => [newCard, ...prev]);
    console.log("Updated cards:", cards);
  };

  return (
    <Layout>
      <Header title="React TS Web" subtitle="Filtering with State & Props" />

      <CardForm onCreate={handleCreateCard} />

      <FilterMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <CardList cards={filteredCards} onCardClick={handleCardClick} />

      <Footer year={2025} brand="Piyush Inc." />

      <Modal card={selectedCard} onClose={handleCloseModal} />
    </Layout>
  );
};

export default App;
