import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCfu5aIq44854ZSuPyhqPy1bwJ9Nfs05PQ",
    authDomain: "delivryapp-f804a.firebaseapp.com",
    databaseURL: "https://delivryapp-f804a-default-rtdb.firebaseio.com",
    projectId: "delivryapp-f804a",
    storageBucket: "delivryapp-f804a.appspot.com",
    messagingSenderId: "943163205814",
    appId: "1:943163205814:web:88aa0068f125c3665d1e17"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};