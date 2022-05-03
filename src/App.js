import './styles/App.css';

import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import FAQ from "./components/FAQ"
// import Form from "./components/Form"
// import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
      
      <Header />

      <AboutUs />

      <Features />

      <FAQ />

      {/* <Form />

      <Footer /> */}


    </div>
  );
}

export default App;
