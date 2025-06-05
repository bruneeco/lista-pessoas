import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3000/peoples')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.error('Erro ao buscar usuario:', err));
  }, []);

  return (
    <div className='App'>
      <h1>Dashbord de Usuarios</h1>
      <p>Total de usuarios:</p>
      <div className='user-container'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      
        </div>
        </div>
);
}
export default App;