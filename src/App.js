import Main from "./component/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./component/main/Service";
import Generate from "./component/main/Generate";
import Ing from "./component/main/Ing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"Service"} element={<Service />}></Route>
          <Route path={"Generate"} element={<Generate />}></Route>
          <Route path={"Ing"} element={<Ing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
