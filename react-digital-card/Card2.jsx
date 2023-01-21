import Info2 from './components-card-2/Info2';
import About2 from './components-card-2/About2';
import Intrests2 from './components-card-2/Intrests2';
import SocialLinks2 from './components-card-2/SocialLinks2';

export default function Card() {
  return (
    <div>
      <div className="card-light">
        <Info2 />
        <About2 />
        <Intrests2 />
        <SocialLinks2 />
      </div>
    </div>
  );
}
