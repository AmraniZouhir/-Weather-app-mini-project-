import { useEffect } from 'react';
import vidioBG from '../assets/videoB2.mp4'
import '../Welcome/style.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'; // You can choose any icon you want




function App() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);


  return (
    <div className="main">
      <video src={vidioBG} autoPlay loop muted />
      <div className='content'>
        <h1 className='display-4 fw-normal'>Weather App</h1>
        <h3 className='center-text'>
          Welcome to the weather application, where accurate forecasts meet user-friendly design.
          Get ready to experience real-time updates, precise predictions, and an intuitive interface.
          Whether you're planning your day or embarking on an adventure, our weather app is here to be your reliable companion.
          Step into our world of weather wonders! Let's dive into the forecast together!
        </h3>
        <Button>
          <span>Get Started</span>     

      <FontAwesomeIcon icon={faSunPlantWilt} />
    </Button>
      </div>
    </div>

  );
}

export default App;

