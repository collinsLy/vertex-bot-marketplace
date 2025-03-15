import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { getFirestore, collection, addDoc, getDocs } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vertex--bot-marketplace.firebaseapp.com",
  projectId: "vertex--bot-marketplace",
  storageBucket: "vertex--bot-marketplace.appspot.com",
  messagingSenderId: "225029150948",
  appId: "1:225029150948:web:0cd6a0694c3237873174f1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Auth functions
export const simpleAuth = {
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
  signUp: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Create user document in Firestore
      await addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        email: email,
        created_at: new Date(),
        last_login: new Date()
      });
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

// Database functions
export const simpleDB = {
  add: async (collectionName, data) => {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  },
  get: async (collectionName) => {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};

// User management
export const userManager = {
  currentUser: () => auth.currentUser,
  trackUser: (callback) => auth.onAuthStateChanged(callback),
  createUserProfile: async (userData) => {
    const user = auth.currentUser;
    if (!user) throw new Error('Not authenticated');
    
    await setDoc(doc(db, 'users', user.uid), {
      ...userData,
      created_at: new Date()
    });
  }
};