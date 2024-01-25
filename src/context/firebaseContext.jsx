import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import React from 'react';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3drrs2OUINjINAD8yr0RFEQw9N2zUBOQ",
  authDomain: "project-with-context.firebaseapp.com",
  databaseURL: 'https://crested-lexicon-402808-default-rtdb.firebaseio.com/',
  projectId: "project-with-context",
  storageBucket: "project-with-context.appspot.com",
  messagingSenderId: "1021533207549",
  appId: "1:1021533207549:web:e15f41a33976f8e28a3794",

};

const fireBaserApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(fireBaserApp);
const database = getDatabase(fireBaserApp);
const signInWithGoogle=()=>{
 console.log('hle'); 
}

const putData = (key, data) => {
  set(ref(database, key), data);
};

const firebaseContext = createContext(null);
export const useFirebase = () => {
  const context = useContext(firebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  return (
    <firebaseContext.Provider value={{ signUpUserWithEmailAndPassword, putData,signInWithGoogle }}>
      {props.children}
    </firebaseContext.Provider>
  );
};
