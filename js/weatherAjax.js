
function getWeather()
{
	//cedar park lattitude longitude... 
	//Below is the url to get lattitude, longitude
	//http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php?listZipCodeList=78613
	var lat = 30.5146;
	var lon = -97.8303;
	
	var product = "time-series";
	
	var beginTime = new Date();
	var endTime = new Date();
	endTime.setDate(endTime.getDate() + 5); //add 5 days weather by default
	
	var weatherOptions = "maxt=maxt&mint=mint";
	
	var url =  "http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php";
	
	url += "?lat=" + lat + "&lon=" + lon + "&product=" + product + 
			"&begin=" + beginTime.toISOString() + "&end=" + 
			endTime.toISOString() + "&" + weatherOptions;
	
	$.ajax({url: url, 
		success:function onWeatherReceived(result) {
			
			var max = [];
			var min = [];			

			var xmlM = $(result).find('temperature[type=maximum]');
			$(xmlM).find("value").each(function(){
						// select a container were you want to put your data, them append data in it;;
						max.push($(this).text());
					});

			xmlM = $(result).find('temperature[type=minimum]');
			$(xmlM).find("value").each(function(){
						// select a container were you want to put your data, them append data in it;;
						min.push($(this).text());
					});


			if (max.length > 4 && min.length > 4)
			{
				if (max.length == min.length) 
				{
					$("#today").text(max[0] + "/" + min[0]);
					$("#tomorrow").text(max[1] + "/" + min[1]);
					$("#day3").text(max[2] + "/" + min[2]);
					$("#day4").text(max[3] + "/" + min[3]);
					$("#day5").text(max[4] + "/" + min[4]);
					$("#day6").text(max[5] + "/" + min[5]);
				} else if (min.length > max.length)
				{ 
					$("#today").text("--/" + min[0]);
					$("#tomorrow").text(max[0] + "/" + min[1]);
					$("#day3").text(max[1] + "/" + min[2]);
					$("#day4").text(max[2] + "/" + min[3]);
					$("#day5").text(max[3] + "/" + min[4]);
					$("#day6").text(max[4] + "/" + min[5]);
				} else if (max.length > min.length) {
					$("#today").text(max[0] + "/--");
					$("#tomorrow").text(max[1] + "/" + min[0]);
					$("#day3").text(max[2] + "/" + min[1]);
					$("#day4").text(max[3] + "/" + min[2]);
					$("#day5").text(max[4] + "/" + min[3]);
					$("#day6").text(max[5] + "/" + min[4]);
				}
			}
		}});
}