import React from 'react';
import Navigation from '../components/Navigation';
import data from '../inputs/Data';
import Card from '../components/Card';

const elements = data.map((item) => <Card {...item} />);

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="card-list">{elements}</div>
    </div>
  );
}
