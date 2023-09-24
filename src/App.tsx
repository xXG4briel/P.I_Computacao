import Routes from "./pages/routes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
