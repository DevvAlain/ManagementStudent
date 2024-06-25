import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://667a355b18a459f63952b6c2.mockapi.io/studentManagement')
      .then(response => {
        const sortedStudents = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setStudents(sortedStudents);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid container spacing={3} style={{ padding: 24 }}>
      {students.map(student => (
        <Grid item xs={12} sm={6} md={4} key={student.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {student.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {student.class}
              </Typography>
              <Button component={Link} to={`/detail/${student.id}`} size="small">Detail</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
