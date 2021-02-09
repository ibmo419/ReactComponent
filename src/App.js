import './App.css';
import Photo from './Components/Profile/ProfilPhoto';
import Fullname from './Components/Profile/FullName';
import Adress from './Components/Profile/Address';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
    <Photo/>
    <Fullname/>
    <div className="display">
    <FontAwesomeIcon icon={faMapMarkerAlt}  size="2x" color="blue" />
    <Adress/>
    </div>
    </div>
  );
}
export default App;
