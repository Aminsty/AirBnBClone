import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data';

export default function App() {
  const cards = data.map(item => {
    return (
        <Card 
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots} />
      )
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="card-list">
          {cards}
        </section>
    </div>
  );
}
