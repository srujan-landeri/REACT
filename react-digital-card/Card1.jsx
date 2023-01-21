import Info from './components-card-1/Info';
import About from './components-card-1/About';
import Intrests from './components-card-1/Intrests';
import SocialLinks from './components-card-1/SocialLinks';

export default function Card() {
  return (
    <div>
      <div className="card-dark">
        <Info />
        <About />
        <Intrests />
        <SocialLinks />
      </div>
    </div>
  );
}
