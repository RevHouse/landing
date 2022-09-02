import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import "./app.scss";
import InterCards from "./components/InterCards/interCards";
import Steps from "./components/Steps/Steps";
import Partners from "./components/Partners/Partners";
import Contact from "./components/ContactForm/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <InterCards />
      <Steps />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
