import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <FoodMenu/>
      <BookTable/>
    </>
  );
};
export default App;
