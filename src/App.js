import './styles/App.css';

import Header from "./components/Header"
import About from "./components/About"
import Features from "./components/Features"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
// import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
      
      <Header />

      <About />

      <Features />

      {/* blabla je te vend le produit */}

      <FAQ />

      <Contact />

      {/* <Footer /> */}


    </div>
  );
}

export default App;
