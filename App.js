import "./App.css";
import Hello from "./component/Hello";
import Hello2 from "./component/Hello2";

function App() {
  const Name = "김상두";
  const web_page = {
    name: "네이버",
    url: "https://www.naver.com",
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>리액트 테스트{Name}</h1>
      <h2>
        <a href={web_page.url}>{web_page.name} 이동</a>
      </h2>
      <Hello cnt={0} />
      <Hello2 />
    </div>
  );
}

export default App;
