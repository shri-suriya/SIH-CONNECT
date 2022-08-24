const details=[]
function getInfo() {
	var username = document.getElementById('Username').value
    var password = document.getElementById('pass').value
	var address = document.getElementById('address').value
    var Email = document.getElementById('Email').value
    var Number = document.getElementById('Number').value
    var Batch = document.getElementById('Batch').value
    var Ncc = document.getElementById('Ncc').value

    alert("Register succesfull");
    const data={
        'username' : username,
        'password':password,
        'address' : address,
        'Email' : Email,
        'Number': Number,
        'Batch':Batch,
        'Ncc': Ncc

    }

    details.push({
        'username':data.username,
        'password':data.password,
        'address':data.address,
        'email':data.Email,
        'Number':data.Number,
        'Batch':data.Batch,
        'Ncc':data.Ncc
    })
    console.log(details);
    window.localStorage.setItem('storeinfo', JSON.stringify(details));
    window.localStorage.getItem('storeinfo', JSON.parse(details));
    console.log(details)

}
function Info() {
    
    
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