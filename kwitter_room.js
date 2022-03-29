var firebaseConfig = {
      apiKey: "AIzaSyDPg2CQwNp_E3c4ukiVPC9ia6zOc9x-37U",
      authDomain: "kwitter-e68b1.firebaseapp.com",
      databaseURL: "https://kwitter-e68b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-e68b1",
      storageBucket: "kwitter-e68b1.appspot.com",
      messagingSenderId: "687230098745",
      appId: "1:687230098745:web:eee143f715eade040b9ce8"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Roomname-"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}