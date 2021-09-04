var firebaseConfig = {
  apiKey: "AIzaSyD_EXdBTljCO0r8B6GhfwZf5NgXPx6BJrM",
  authDomain: "kwitter-bbedf.firebaseapp.com",
  databaseURL: "https://kwitter-bbedf-default-rtdb.firebaseio.com",
  projectId: "kwitter-bbedf",
  storageBucket: "kwitter-bbedf.appspot.com",
  messagingSenderId: "986543399311",
  appId: "1:986543399311:web:c9e7aa48ce67e1f247abfa"
};

firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("user");
document.getElementById("welcomeuser").innerHTML="Welcome "+username+"!";


function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
        purpose:"Adding roomname"
      });
      localStorage.setItem("rn",roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
     console.log("Room_names-"+Room_names)
     row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;

  //End code
  });});}
getData();



function addroom(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwitter_page.html";
  
}
function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("rn");
  window.location="index.html"
}