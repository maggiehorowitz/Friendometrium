import firebase from 'firebase'


class FireForumData{
  constructor(){
    this.init()
    this.checkAuth()
  }

  // forumPost = firebase.database().ref("ForumPosts/");
  forumPost = firebase.database().ref("ForumPosts/");
  // forumPost2 = firebase.database().ref("ForumPosts/" + this.uid);



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

  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }

      this.db.push(message);
    });
  };

  parse = message => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);



    return{
      _id,
      createdAt,
      text,
      user
    };

  };

  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };
  off(){
    this.db.off()
  }

  get db() {
    return firebase.database().ref("ForumPosts");
    //
    // //create
    // Fire.database().ref("FunFactsChat");
    //
    // //open

  }

  get uid(){
    return(firebase.auth().currentUser || {}).uid;
  }

  get email(){
  return(firebase.auth().currentUser.email)
}

  get name(){
    return (firebase.auth().currentUser.displayName)
  }

}

export default new FireForumData();
