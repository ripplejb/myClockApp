window.onload = function onloaded (){
	var mytimer = setInterval(timerHandler, 1000);
	getWeather();
}

function timerHandler()
{
	var d = new Date();
	document.getElementById("myTime").innerHTML = d.toLocaleTimeString();
	document.getElementById("myDate").innerHTML = d.toLocaleDateString();

}

function closeClick() {
	window.close();
}
