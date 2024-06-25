import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://667a355b18a459f63952b6c2.mockapi.io/studentManagement')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios.delete(`https://667a355b18a459f63952b6c2.mockapi.io/studentManagement/${id}`)
        .then(() => {
          setStudents(students.filter(student => student.id !== id));
          alert("Student deleted successfully");
        })
        .catch(error => console.error('Error deleting student:', error));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.dateofbirth}</TableCell>
              <TableCell>{student.gender ? 'Male' : 'Female'}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>
                <Button component={Link} to={`/detail/${student.id}`}>Detail</Button>
                <Button component={Link} to={`/edit/${student.id}`}>Edit</Button>
                <Button onClick={() => handleDelete(student.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dashboard;
