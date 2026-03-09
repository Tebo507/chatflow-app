
let username=""
let messages=JSON.parse(localStorage.getItem("chatMessages")) || []

function login(){

username=document.getElementById("username").value

if(username==="") return

document.getElementById("loginBox").style.display="none"
document.getElementById("chatSection").style.display="block"

displayMessages()

}

function saveMessages(){

localStorage.setItem("chatMessages",JSON.stringify(messages))

}

function sendMessage(){

let input=document.getElementById("messageInput")
let text=input.value

if(text==="") return

let time=new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})

let message={
user:username,
text:text,
time:time
}

messages.push(message)

saveMessages()

displayMessages()

input.value=""

}

function displayMessages(){

let chatBox=document.getElementById("chatBox")

chatBox.innerHTML=""

messages.forEach(msg=>{

let div=document.createElement("div")

div.classList.add("message")

if(msg.user===username){
div.classList.add("me")
}else{
div.classList.add("other")
}

div.innerHTML=`
<b>${msg.user}</b><br>
${msg.text}
<span class="time">${msg.time}</span>
`

chatBox.appendChild(div)

})

chatBox.scrollTop=chatBox.scrollHeight

}
