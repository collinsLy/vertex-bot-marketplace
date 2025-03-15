import { db } from './firebaseClient'
import { collection, addDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'

export async function insertData(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    return docRef.id
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function fetchData(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    throw new Error(error.message)
  }
}

// Add realtime listener
export function subscribeToCollection(collectionName, conditions, callback) {
  const q = query(
    collection(db, collectionName),
    where(...conditions)
  );
  
  return onSnapshot(q, (querySnapshot) => {
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(data);
  });
}

// Example usage:
// const unsubscribe = subscribeToCollection(
//   'bots', 
//   ['isPublished', '==', true],
//   (bots) => console.log('Updated bots:', bots)
// );