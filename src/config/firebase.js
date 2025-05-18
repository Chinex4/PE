// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC528gh8Mk_ByPAxbiRxUrxeczPfDi6_U0',
	authDomain: 'pevans-b17c2.firebaseapp.com',
	projectId: 'pevans-b17c2',
	storageBucket: 'pevans-b17c2.firebasestorage.app',
	messagingSenderId: '1073448904008',
	appId: '1:1073448904008:web:3cc5cca77751c4b6adff7d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
