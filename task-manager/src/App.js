import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [pageSize, setPageSize] = useState(10); // Number of tasks per page

  useEffect(() => {
    fetchTasks();
  }, [page, pageSize]); 

  const fetchTasks = () => {
    axios.get(`http://localhost/test_smoft/api/taskes/get_taskes.php?page=${page}&pageSize=${pageSize}`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.Id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <span> Page {page} </span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
