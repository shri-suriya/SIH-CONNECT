const details=[{
    username :'1002',
    password :'sececsbs'
}]

function StoreInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

    
	for(var i = 0; i < details.length; i++) {
		if(username == details[i].username && password == details[i].password) {
			console.log(username + " is logged in!!!")
            alert("You are log in");
            location.href = "Anologed.html";
			return
		}
	}
	console.log("incorrect username or password")
    alert("incorrect username or password");
    
}
function button() {
	location.href = "register.html";
}