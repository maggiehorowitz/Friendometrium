import firebase from 'firebase'

class FirePlaceData{
  constructor(){
    this.init()
    this.checkAuth()
  }

  savedPlace = firebase.database().ref("Places/");

  removeNow = async (Place) => {
    firebase.database().ref('/Places/' + Place).remove();
  }

  init = () => {
    if(!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBptO5PJeP1F7w_p8S3SmQDWi0Iq4JV3mA",
        authDomain: "fir-forumdemo-7a164.firebaseapp.com",
        databaseURL: "https://fir-forumdemo-7a164.firebaseio.com",
        projectId: "fir-forumdemo-7a164",
        storageBucket: "fir-forumdemo-7a164.appspot.com",
        messagingSenderId: "1038334155242",
        appId: "1:1038334155242:web:c48532c1c2af2cd3ecfa93"
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(!user){
        firebase.auth().signInAnonymously();
      }
    });
  };


  get db() {
    return firebase.database().ref("Places");
  }
}


export default new FirePlaceData();
