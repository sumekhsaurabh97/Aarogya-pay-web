import { BrowserRouter,Routes , Route } from 'react-router-dom';

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
     <BrowserRouter>
     <Routes>

     <Route exact path='/' element={<HeroSection/>}/>
     <Route exact path='/MobileVerification' element={<MobileVerification input_display={{display :'none'}} btn_style={{marginTop:"90px"}} btn_text={"Send OTP"} OTP_submit_btn_toggle={"OTP_submit_btn_toggle"}/>}/>
     <Route exact path='/MobileVerification_OTP' element={<MobileVerification input_display={{display :'block'}} btn_style={{marginTop:"50px"}} btn_text={"Next"} mobVarif_btn_toggle={"mobVarif_btn_toggle"}/>}/> 
     <Route exact path='/DetailsForm' element={<DetailsForm/>}/>
     <Route exact path='/YourAadress' element={<YourAadress/>}/>
     <Route exact path='/EmploymentDetails' element={<EmploymentDetails/>}/>
     <Route exact path='/CibilCheck' element={<CibilCheck/>}/>
     </Routes>
     </BrowserRouter> 
    {/* <HeroSection/>
    <MobileVerification input_display={{display :'none'}} pad_bottom={{paddingBottom :"32px"}}/>
    <MobileVerification input_display={{display :'block'}} btn_display={{display :'none'}} pad_bottom={{paddingBottom :"97px"}}/>
    <DetailsForm/>
    <YourAadress/>
    <EmploymentDetails/>
    <CibilCheck/> */}
    </div>
  );
}

export default App;
