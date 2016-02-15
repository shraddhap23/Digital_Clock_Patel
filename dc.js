$(document).ready(function(){

	setInterval(function(){
		var currentDate = new Date();
		var hoursTwoDigitsWithLeadingZero = ("0" + currentDate.getHours()).substr(-2);

		var minutesTwoDigitsWithLeadingZero = ("0" + currentDate.getMinutes()).substr(-2);

		var secondsTwoDigitsWithLeadingZero = ("0" + currentDate.getSeconds()).substr(-2);

		var milliTwoDigitsWithLeadingZero = ("0" + currentDate.getMilliseconds()).substr(-3);		

		$("#hour").text(hoursTwoDigitsWithLeadingZero);
		$("#min").text(minutesTwoDigitsWithLeadingZero);
		$("#sec").text(secondsTwoDigitsWithLeadingZero);
		$("#milli").text(milliTwoDigitsWithLeadingZero);
	},100)

});

