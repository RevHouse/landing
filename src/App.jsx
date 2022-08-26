import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import "./app.scss";
import InterCards from "./components/InterCards/interCards";
import Steps from "./components/Steps/Steps";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <InterCards />
      <Steps />
      <Partners />
    </div>
  );
}

export default App;
