import { Typography, Card, Button } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';

import db from '../../firebase';

async function handleClick() {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export default function FebTen() {
  return (
    <>
      <Button variant="text" href="./">
        ← Back
      </Button>
      <Card sx={{ my: 2, p: 4 }}>
        <Typography variant="h2">Monitoring Reactions</Typography>
      </Card>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Send to Database
      </Button>
    </>
  );
}
