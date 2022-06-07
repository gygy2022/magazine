import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYekAEZacWrPp41Vygpb21LPkVvzBNFI",
  authDomain: "magazine-ab87a.firebaseapp.com",
  projectId: "magazine-ab87a",
  storageBucket: "magazine-ab87a.appspot.com",
  messagingSenderId: "1060683991652",
  appId: "1:1060683991652:web:3eb6cdcadffb0e674d6d71",
  measurementId: "G-7L69PW06TW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;