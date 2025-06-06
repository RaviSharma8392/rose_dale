import Header from "./components/Header";
import "./index.css";
import CenterSection from "./components/CenterSection";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <CenterSection></CenterSection>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default App;