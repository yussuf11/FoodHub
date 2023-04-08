import About from "./Restuarant/About";
import ChefMenu from "./Restuarant/ChefMenu";
import FindUs from "./Restuarant/FindUs";
import Footer from "./Restuarant/Footer";
import Gallery from "./Restuarant/Gallery";
import Header from "./Restuarant/Header";
import Navbar from "./Restuarant/Navbar";
import SpecialMenu from "./Restuarant/SpecialMenu";



function App() {
  return (
    <div className="App">
<Navbar />
<Header />
<About />
<SpecialMenu />
<Gallery />
<ChefMenu />
<FindUs />
<Footer />

    </div>
  );
}

export default App;
