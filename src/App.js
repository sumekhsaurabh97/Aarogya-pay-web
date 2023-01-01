import HeroSection from './Components/HeroSection';
import MobileVerification from './Components/MobileVerification';
import DetailsForm from './Components/DetailsForm';
import YourAadress from "./Components/YourAadress";
import EmploymentDetails from "./Components/EmploymentDetails";
import CibilCheck from "./Components/CibilCheck";



import './App.css';

function App() {
  return (
    <div className="App">
    <HeroSection/>
    <MobileVerification input_display={{display :'none'}} pad_bottom={{paddingBottom :"32px"}}/>
    <MobileVerification input_display={{display :'block'}} btn_display={{display :'none'}} pad_bottom={{paddingBottom :"97px"}}/>
    <DetailsForm/>
    <YourAadress/>
    <EmploymentDetails/>
    <CibilCheck/>
    </div>
  );
}

export default App;
