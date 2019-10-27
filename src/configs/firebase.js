import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
};

firebase.initializeApp(config);
