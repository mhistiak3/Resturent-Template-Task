import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import FoodMenu from "./components/FoodMenu/FoodMenu";
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
    </>
  );
};
export default App;
