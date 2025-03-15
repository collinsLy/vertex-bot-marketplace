// Add at the top of the file
import { useEffect } from 'react';
import { auth } from '../lib/firebaseClient';

// Add inside your component
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    console.log('Auth state changed:', user ? user.uid : 'No user');
  });
  
  return () => unsubscribe();
}, []);

import { auth } from '../lib/firebaseClient'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth'

export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function firebaseSignOut() {
  try {
    await signOut(auth)
  } catch (error) {
    throw new Error(error.message)
  }
}

// Modify your signup handler
async function handleSignUp(email, password) {
  try {
    const user = await simpleAuth.signUp(email, password);
    console.log('User created:', user.uid);
    // Create user profile
    await userManager.createUserProfile({
      email: email,
      role: 'user'
    });
  } catch (error) {
    console.error('Signup failed:', error);
    alert(`Error: ${error.message}`);
  }
}