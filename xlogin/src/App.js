import './App.css';
import {useState} from "react";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === 'user' && password === 'password'){
      setError('');  
      setIsSubmitted(true);
    }else{
      setError('Invalid username or password');
      setIsSubmitted(false);
    }
  }


  return (
    <div >
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ):
      <form onSubmit={handleSubmit} className='form'>
        {error && <p>{error}</p>}
        <div>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      }   
    </div>
  );
}

export default App;
