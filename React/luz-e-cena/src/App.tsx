import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="public/Imagens/Banner principal/Banner.png" alt="Banner" />
      <MovieSection />
      <Banner
        src="public/Imagens/Banner combo pipoca/Banner combo desktop.png"
        alt="Banner"
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
