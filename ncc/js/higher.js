const details=[{
    username :'1001',
    password :'sececsbs'
}]

function Info() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

    
	for(var i = 0; i < details.length; i++) {
		if(username == details[i].username && password == details[i].password) {
			console.log(username + " is logged in!!!")
            alert("You are log in");
            location.href = "Hloged.html";
			return
		}
	}
	console.log("incorrect username or password")
    alert("incorrect username or password");
    
}
