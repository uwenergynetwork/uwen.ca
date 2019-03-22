var url_string = window.location.href
var url = new URL(url_string);

if(url.searchParams.get("signup") == "true") {
	$("#email")[0].innerHTML = "<h4 class='col-12'>Thank you for subscribing!</h4>";
}
