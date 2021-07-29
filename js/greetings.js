const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

function paintGreetings(username){
   greeting.classList.remove(HIDDEN_CLASSNAME)
   greeting.innerText = `Good Evening, ${username}.😊`; 
}

const savedUsername =  localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);//show the form
   loginForm.addEventListener("submit",onLoginSubmit);
}else{
   paintGreetings(savedUsername);
}