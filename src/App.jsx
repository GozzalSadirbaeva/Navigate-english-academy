import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Galery from "./pages/galery/Galery";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Offer from "./pages/offer/Offer";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/offer" element={<Offer />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
