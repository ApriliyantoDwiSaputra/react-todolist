// src/App.jsx

import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
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
      {/* Daftar tugas akan ditampilkan di sini */}
    </div>
  )
}

export default App