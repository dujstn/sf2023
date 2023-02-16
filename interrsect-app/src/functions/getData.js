import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { query as summarize } from './query';

let s = '';

export async function getData() {
  const querySnapshot = await getDocs(collection(db, 'febten'));
  querySnapshot.forEach((doc) => {
    s += doc.data().summary;
  });
  s = s.replace(/\r?\n|\r/g, '');
  console.log(
    summarize(s).then((value) => {
      console.log(value);
    })
  );
}
