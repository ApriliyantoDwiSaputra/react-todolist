// src/App.jsx

import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: "Belajar dasar React", isCompleted: true },
    { text: "Membuat aplikasi To-do List", isCompleted: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Fungsi ini dijalankan saat tombol "Tambah" diklik
  const handleAddTask = (e) => {
    e.preventDefault(); // Mencegah form me-refresh halaman

    // Jangan tambah tugas jika input kosong
    if (inputValue.trim() === '') return;

    // Menambahkan tugas baru ke dalam array todos
    setTodos([...todos, { text: inputValue, isCompleted: false }]);
    
    // Mengosongkan kembali input field
    setInputValue(''); 
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Daftar Tugasku</h1>

      <form onSubmit={handleAddTask}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tambah tugas baru..."
        />
        <button type="submit">Tambah</button>
      </form>

      {/* Menampilkan daftar tugas */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li 
            key={index} 
            className={todo.isCompleted ? 'completed' : ''}
          >
            <span onClick={() => handleToggleComplete(index)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App