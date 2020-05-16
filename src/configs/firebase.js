import firebase from 'firebase';
import { YellowBox } from 'react-native';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);

YellowBox.ignoreWarnings(['Setting a timer']);
