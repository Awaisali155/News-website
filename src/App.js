import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Footer />
    </div>
  );
}

export default App;
