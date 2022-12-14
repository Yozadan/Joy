//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='mybtn''id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}

function update_like(message_id){
console.log("clicked on like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);

firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});
}