import firebase from 'firebase'


class FireProfile{
  constructor(){
    this.init()
    this.checkAuth()
  }

  // forumPost = firebase.database().ref("ForumPosts/");
  forumPost = firebase.database().ref("ForumPosts/");
  // forumPost2 = firebase.database().ref("ForumPosts/" + this.uid);

  removeNow = async (Post) => {
    firebase.database().ref('/ForumPosts/' + Post).remove();
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

  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };
  off(){
    this.db.off()
  }

  get email(){
  return(firebase.auth().currentUser.email)
  }

  updateInfo = (display_name, photo_url) => {
    firebase.auth().currentUser.updateProfile({
    displayName: display_name,
    photoURL: photo_url
    });
  };

  updateName = (name) => {
    firebase.auth().currentUser.updateProfile({
    displayName: name
    });
  };
  updatePhoto = (photo_url) => {
    firebase.auth().currentUser.updateProfile({
    photoURL: photo_url
    });
  };

  get name(){
    return (firebase.auth().currentUser.displayName)
  }

  get photo(){
    return (firebase.auth().currentUser.photoURL)
  }

  get username(){
    return firebase.auth().currentUser.email.substring(0, firebase.auth().currentUser.email.indexOf("@"));
  }


}

export default new FireProfile();
