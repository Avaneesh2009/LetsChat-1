const firebaseConfig = {
    apiKey: "AIzaSyA221sOmCPr0be2s0K0s887b6Czz3fS0Ec",
    authDomain: "kwitter-f79a1.firebaseapp.com",
    databaseURL: "https://kwitter-f79a1-default-rtdb.firebaseio.com",
    projectId: "kwitter-f79a1",
    storageBucket: "kwitter-f79a1.appspot.com",
    messagingSenderId: "525481212838",
    appId: "1:525481212838:web:fe7ab58f075749d6b92d67",
    measurementId: "G-Q69KK6LC9Z"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  user_name= localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  
    //End code
    });});}
getData();
