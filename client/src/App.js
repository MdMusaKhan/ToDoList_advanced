import logo from './logo.svg';
import './App.css';
import './pages/Register';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </header>
    </div>
  );
}

export default App;
