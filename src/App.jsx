import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}
