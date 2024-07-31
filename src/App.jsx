import Header from "./modules/Header";
import Main from "./modules/Main";
import Promo from "./modules/Promo";
import ProductsList from "./modules/ProductsList";
import Footer from "./modules/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Promo />
        <ProductsList />
      </Main>

      <Footer />
    </>
  );
}

export default App;
