// Import and configure Firebase
// Make sure to include the Firebase CDN in your HTML file before using this script
// Example: <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"></script>
//          <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"></script>

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "userbot-e8ac4.firebaseapp.com",
    databaseURL: "https://userbot-e8ac4-default-rtdb.firebaseio.com/"
    
    storageBucket: "userbot-e8ac4.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "userbot-e8ac4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = firebase.database();

// Example: Write data to the database
const exampleRef = database.ref('example');
 exampleRef.set({
    name: "VIM Horn Usherbot",
    description: "This is a test entry for Firebase Realtime Database."
 }).then(() => {
    console.log("Data written successfully!");
 }).catch((error) => {
    console.error("Error writing data: ", error);
 });
   database.ref("users/1").set({
    Name: "Delstarford",
    Location : "",
    yearOfStudy: "",
    registrationNumber:"",
    phoneNumber:"",
    
  });
  database.ref("users/1").on("value", (snapshot) => {
    console.log(snapshot.val());
  });
    