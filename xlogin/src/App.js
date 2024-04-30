import './App.css';
import {useState} from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === "user" && password ==="password"){
      setError("");
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
      setError("Invalid username or password");
    }
  }
  return (
    <div>
      <div>
        <h1>Login Page</h1>
      </div>
      {
        isSubmitted ? (
          <div>
            <p>Welcome, {username}!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <lable htmlFor="username">Username</lable>
            <input type='text' id ="username" placeholder ="username" onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div>
            <lable htmlFor="password">Password</lable>
            <input type='password' id ="password" placeholder ="password" onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
          </form>
        )
      }
    </div>
  );
}

export default App;
