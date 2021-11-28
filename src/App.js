import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          murattiii <code>src/App.js</code> and save to reload.
        </p>
        <p>anlaisldi ---- docker run -it -p 3000:3000 -v /home/node/app/node_modules -v /c/Users/Asus/Desktop/Docker/frontend:/home/node/app -e CHOKIDAR_USEPOLLING=true muratdvc/frontend</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
