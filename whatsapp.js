function sendToWhatsapp(){
	let number = "+919377060360";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let mobile = document.getElementById('mobile').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a%0a"
	+ "Email : " +email+ "%0a%0a"
	+ "mobile : " +mobile+ "%0a%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}