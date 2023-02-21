import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { query as summarize } from './query';

export async function getData(date) {
  let s = '';
  const querySnapshot = await getDocs(collection(db, date));
  querySnapshot.forEach((doc) => {
    s += doc.data().summary;
  });
  s = s.replace(/\r?\n|\r/g, '');
  console.log(s);
  const output = await summarize(s);
  return output;
}
