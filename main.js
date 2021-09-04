function adduser(){
    username=document.getElementById("user").value;
    localStorage.setItem("user",username);
    window.location="chat_room.html";
    }
    
    