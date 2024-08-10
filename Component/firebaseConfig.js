  import { initializeApp } from '@react-native-firebase/app';
  import auth from '@react-native-firebase/auth';
  import firestore from '@react-native-firebase/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDe7TdqqvkEZRs3yuOwJCcEkbZFo2datas",
    authDomain: "ootp-966e3.firebaseapp.com",
    projectId: "ootp-966e3",
    storageBucket: "ootp-966e3.appspot.com",
    messagingSenderId: "800628665670",
    appId: "1:800628665670:web:278ac6c1681ccfd7a20947",
    measurementId: "G-P1D9W7MDGW"
  };
  
  if (!initializeApp.apps.length) {
    initializeApp(firebaseConfig);
  }
  
  export { auth, firestore };