import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
    <Navbar 
      heading="An inspiring design delievered to your inbox every morning" 
       subheading="Our team scouts the internet for the best designs, illustrations and art and delievers a truley inspiring one every day to your inbox">
    </Navbar>
    <Footer email="hello@dweep.io"/>
    </>
  );
}

export default App;
