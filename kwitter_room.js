//ADD YOUR FIREBASE LINKS HERE
user=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user + " !" ;

var firebaseConfig = {
  apiKey: "AIzaSyBWFJNlb_yIr-yE-jeAp2AXbgMyt31raDM",
  authDomain: "kwitter-36808.firebaseapp.com",
  databaseURL: "https://kwitter-36808-default-rtdb.firebaseio.com",
  projectId: "kwitter-36808",
  storageBucket: "kwitter-36808.appspot.com",
  messagingSenderId: "656526808581",
  appId: "1:656526808581:web:a42b28c2db80872212ee6c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);  

function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"Adding room_name"
      });
      
      document.getElementById("room_name").value="";
      localStorage.setItem("room_name" , room_name );
      window.location="kwitter_page.html";

    }
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }



    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row="<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id);' ># " + Room_names +"</div><hr>" ;
      document.getElementById("output").innerHTML += row ;
      
       

      //End code
      });});}
getData();


function redirectToRoomName(name)
{
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";

}

