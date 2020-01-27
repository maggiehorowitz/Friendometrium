// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyAm-zCVjxHkhkuPVsdOPgB6I4aRd3xv3fk",
  authDomain: "friendometrium-app.firebaseapp.com",
  databaseURL: "https://friendometrium-app.firebaseio.com",
  storageBucket: "gs://friendometrium-app.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
