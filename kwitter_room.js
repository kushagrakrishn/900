

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCXAwbra5ukC2j_DFA5EW3-z87fn74mctw",
    authDomain: "class-text-7a2dc.firebaseapp.com",
    databaseURL: "https://class-text-7a2dc-default-rtdb.firebaseio.com",
    projectId: "class-text-7a2dc",
    storageBucket: "class-text-7a2dc.appspot.com",
    messagingSenderId: "135089261668",
    appId: "1:135089261668:web:080ace699128d4b13d6371"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  user_name = localStorage.getItem("user_name");





  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  



  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  


  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }

  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
 