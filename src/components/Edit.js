import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    dateofbirth: '',
    gender: '',
    class: '',
    image: '',
    feedback: ''
  });

  useEffect(() => {
    axios.get(`https://667a355b18a459f63952b6c2.mockapi.io/studentManagement/${id}`)
      .then(response => setForm(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://667a355b18a459f63952b6c2.mockapi.io/studentManagement/${id}`, form)
      .then(() => {
        alert('Student updated successfully');
        navigate('/dashboard');
      })
      .catch(error => console.error('Error updating student:', error));
  };

  return (
    <Grid container spacing={3} style={{ padding: 24 }}>
      <Grid item xs={12}>
        <Typography variant="h4" component="div">Edit Student</Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date of Birth"
            name="dateofbirth"
            value={form.dateofbirth}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Class"
            name="class"
            value={form.class}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Feedback"
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">Update Student</Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default Edit;
