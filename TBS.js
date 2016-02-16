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

	setInterval(function(){
		var currentDate = new Date();
		var minutesTwoDigitsWithLeadingZero = ("0" + currentDate.getMinutes()).substr(-2);
		if (minutesTwoDigitsWithLeadingZero%2 === 0){
		 console.log("number is even")
		 $("#min").css("color", "blue");
		}
		else if (minutesTwoDigitsWithLeadingZero%2 === 1){
		 console.log("number is odd")
		 $("#min").css("color", "black");
		}

});


setInterval(function(){
		var currentDate = new Date();
		var minutesTwoDigitsWithLeadingZero = ("0" + currentDate.getMinutes()).substr(-2);
		var colorArray = ['#ff9933','#ff0099','#9966cc'],
    selectBG = colorArray[Math.floor(Math.random() * colorArray.length)];
		if (minutesTwoDigitsWithLeadingZero%5 === 0){
		$('body').css('background-color', selectBG);
		} 
//not sure how to make the color change randomly every 5 minutes rather than randomly change for the whole minute every 5 minutes.

});


setInterval(function(){
		var currentDate = new Date();
		var hoursTwoDigitsWithLeadingZero = ("0" + currentDate.getHours()).substr(-2);
		var colorArray = ['#262835','#000000','#fff8e7'],
    selectBG = colorArray[Math.floor(Math.random() * colorArray.length)];
		if (hoursTwoDigitsWithLeadingZero > 24){
		$("#min").css("color", selectBG);
		} 
//don't know how to make this on the hour

});
