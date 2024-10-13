import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavbarComponent.jsx'
import FormComponent from './FormComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponent/>
    <FormComponent/>
  </StrictMode>,
)
