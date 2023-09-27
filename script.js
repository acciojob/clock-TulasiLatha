//your JS code here. If required.

function updateTimer(){
	const time=document.getElementById("timer");
	const currentdate=new Date();

	const formatted=currentdate.toLocaleTimeString();

	time.textcontent=formatted;
}
updateTimer();
setInterval(updateTimer,1000)