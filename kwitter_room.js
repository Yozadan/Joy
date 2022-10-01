
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBy-cIoQKRiX1r2wXsPkCTabjb8rPe50LU",
      authDomain: "let-s-chat-e0c49.firebaseapp.com",
      databaseURL: "https://let-s-chat-e0c49-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-e0c49",
      storageBucket: "let-s-chat-e0c49.appspot.com",
      messagingSenderId: "130988016189",
      appId: "1:130988016189:web:b8ea904ded4f8c4cdce054"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addroom(){
          room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
          purpose:"add room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html" ;
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
    console.log("Room names- "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
          //End code
          });});}
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}