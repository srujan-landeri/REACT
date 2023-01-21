import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './inputs/Data';

export default function App() {
  const elements = Data.map((item) => (
    <Card
      openSpots={item.openSpots}
      img={item.coverImg}
      key={item.id}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  ));

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <div className="cards">{elements}</div>
    </div>
  );
}
