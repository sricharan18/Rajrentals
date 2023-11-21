import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Properties from './views/properties';
import PropertyDetails from './views/propertyDetails';
import Contact from './views/contact';
import NotFound from './views/notFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="properties" element={<Properties/>} />
      <Route path="properties/:id" element={<PropertyDetails/>} />
      <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
