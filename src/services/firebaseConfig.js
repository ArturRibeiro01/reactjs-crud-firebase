import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDgiT0_tPCkzVqM_EVv5hPOrDdEm7zS9jA',
  authDomain: 'react-auth-crud-project.firebaseapp.com',
  projectId: 'react-auth-crud-project',
  storageBucket: 'react-auth-crud-project.appspot.com',
  messagingSenderId: '761129140889',
  appId: '1:761129140889:web:bdf11fd26db42df1486e08',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
