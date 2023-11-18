import logo from "./logo.svg";
import "./App.css";

import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main-content d-flex">
        <SideBar />
        <div className="main-content-holder">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
