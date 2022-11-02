import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Frontend-DevOps brings you a new post and video regarding the latest news and tutorials in Web Development</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Visit our blog to get the best tutorials.
        </p>
        <a
          className="App-link"
          href="https://www.frontend-devops.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Frontend-DevOps
        </a>

      </header>
    </div>
  );
}

export default App;
