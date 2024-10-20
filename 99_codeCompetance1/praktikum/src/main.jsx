import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx';
import ContactComponent from './ContactComponent.jsx';
import AboutComponent from './AboutComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <WelcomeComponent/>
    <ContactComponent/>
    <AboutComponent/>
    <FooterComponent/>

  </StrictMode>,
)
