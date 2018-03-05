function checkCode() {
	if (!document.cookie.length) {
		document.getElementById("interestCode").innerHTML = "TAKE TEST!"
	} else {
		document.getElementById("interestCode").innerHTML = document.cookie
	}
}

checkCode();