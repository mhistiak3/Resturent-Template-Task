import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Review from "./components/Review/Review";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <FoodMenu/>
      <BookTable/>
      <Review/>
      <Footer/>
    </>
  );
};
export default App;
