import { initializeApp } from 'firebase/app';
import { getFirestore ,collection,getDocs} from 'firebase/firestore';
import { getAuth,  GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBZhJII3CHDJ7UO3ClaHpdmhf76cTiCXI8",
  
    authDomain: "streamnex-d7782.firebaseapp.com",
  
    projectId: "streamnex-d7782",
  
    storageBucket: "streamnex-d7782.appspot.com",
  
    messagingSenderId: "35133909478",
  
    appId: "1:35133909478:web:fa2b64ba8faabcc2c50e27",
  
    measurementId: "G-K2KDXSTVR0"
  
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, collection,getDocs, provider,signInWithPopup };
