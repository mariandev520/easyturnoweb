import './App.js';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Precios from './components/Precios';
import QueEs from './components/QueEs';
import ComoFunciona from './components/ComoFunciona';
import Form from './components/Form';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Arrow from './components/Arrow';

function App() {
  
return (
    <>
      <Navbar />
      <Main id="section0"/>
      <QueEs id="section1"/>
      <ComoFunciona id="section2"/>
      <Precios id="section3"/>
      <Faq id="section4"/>
      <Form id="section5"/>
      <Footer />
      <Arrow />
    </>
  );
}

export default App;
