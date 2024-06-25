import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function Detail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`https://667a355b18a459f63952b6c2.mockapi.io/studentManagement/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!student) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {student.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date of Birth: {student.dateofbirth}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {student.gender ? 'Male' : 'Female'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Class: {student.class}
        </Typography>
        <img src={student.image} alt={student.name} style={{ width: '100%' }} />
        <Typography variant="body2" color="text.secondary">
          Feedback: {student.feedback}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Detail;
