import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/users')
    .then((responce) => {
      setUsers(responce.data.users);
    })
    .catch((err) => {
      console.error('Error fetching data: ', err);
    });

  },[]);

  return (
    <>
      <h1>Users</h1>
      <div className='users'>
        {users.map((user) => (
          <div key={user._id} className='user'>
            <li>
              <strong>Name:</strong> {user.name} :- <strong>Email:</strong> {user.email}
            </li>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default App
