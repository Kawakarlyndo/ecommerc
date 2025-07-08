// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGHYT4oC-GVKaFW_6RBHy1zrgd5wihDcM",
    authDomain: "portfolio-91d7b.firebaseapp.com",
    databaseURL: "https://portfolio-91d7b-default-rtdb.firebaseio.com",
    projectId: "portfolio-91d7b",
    storageBucket: "portfolio-91d7b.firebasestorage.app",
    messagingSenderId: "6133951328",
    appId: "1:6133951328:web:4f5efca1c3deb2ddf50c05",
    measurementId: "G-FMYLX10FDS"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
