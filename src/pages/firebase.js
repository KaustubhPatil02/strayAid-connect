// firebase.js

import 'firebase/compat/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC2SYl9_IB4F83ap3fmUb98p2zG3LxSmd4",
    authDomain: "location-62d55.firebaseapp.com",
    databaseURL: "https://location-62d55-default-rtdb.firebaseio.com",
    projectId: "location-62d55",
    storageBucket: "location-62d55.appspot.com",
    messagingSenderId: "1099208621215",
    appId: "1:1099208621215:web:fcbd1c1c6ee7dd56f036aa",
    measurementId: "G-PXTZVW7CEF"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDXeOEw72MjOZf3HJscyKruOOvjcjxhqw4",
//     authDomain: "strayaidconnect-donation.firebaseapp.com",
//     databaseURL: "https://location-62d55-default-rtdb.firebaseio.com",

//     // databaseURL: "https://strayaidconnect-donation-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "strayaidconnect-donation",
//     storageBucket: "strayaidconnect-donation.appspot.com",
//     messagingSenderId: "483834303519",
//     appId: "1:483834303519:web:921b002b163170f6be312a",
//     measurementId: "G-21VB2HV3JQ"
//   };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();