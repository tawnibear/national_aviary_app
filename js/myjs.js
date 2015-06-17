// ------------- DAILY SCHEDULE DATE ------------- //

	var d = new Date();
	var ee = d.getDay();
	var dd = d.getDate();
	var mm = d.getMonth();
	
	if(dd<10) { dd='0'+dd } 
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var today = day[ee]+', '+month[mm]+' '+dd;
	
// ------------- end daily schedule date ------------- //