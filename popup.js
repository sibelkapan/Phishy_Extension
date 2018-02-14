//Get URL of the web page
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	function(tabs){
		//Keep a count, if a phishing rule occurs increase count.
		var countPhishy = 0;
		//Get URL of the web page
		document.getElementById("p1").innerHTML = "URL:<br>" +tabs[0].url;
		//Check URL length and if it is bigger than 74 call phishing
		document.getElementById("p2").innerHTML = "URL length: " +tabs[0].url.length;
		var strLength = tabs[0].url.length;
		if(strLength<54){
			document.getElementById("p3").innerHTML = "Legitimate(URL length is < 54)"
		}else if(strLength>=54&strLength<=74){
			document.getElementById("p3").innerHTML = "Suspicious(URL length is between 54 to 74)" 
		}else{
			countPhishy++;
			document.getElementById("p3").innerHTML = "Phishing(URL length is >74)"
		}
		//Check internet protokol if it is https than legal
		var strProtocol = tabs[0].url;
		var pageProtocol = strProtocol.split(":",1);
		if(pageProtocol=="https"){
			document.getElementById("p4").innerHTML = "(Secure) " +pageProtocol + " protocol";
		}else{
			countPhishy++;
			document.getElementById("p4").innerHTML = "(Not Secure) " +pageProtocol + " protocol";
		}
		//Check URL to include @ symbol
		var strAtSym = tabs[0].url;
		var pageAtSym = strAtSym.includes("@");
		if(pageAtSym==true){
			countPhishy++;
			document.getElementById("p5").innerHTML = "Include @";
		}else{
			document.getElementById("p5").innerHTML = "Not Include @";
		}
		//Check URL number of dots '.'
		var strDot = tabs[0].url;
		var stringDotSearch = ".",strDot;
		for(var i=countDot=0; i<strDot.length; countDot+=+(stringDotSearch===strDot[i++]));
			document.getElementById("p6").innerHTML = "Number of dots '.' is " + countDot;
		if(countDot>4){
			countPhishy++;
		}
		//Check URL number of dashes '-' 	
		var strDashes = tabs[0].url;
		var pageDashes = strDashes.includes("-");
		if(pageDashes==true){
			document.getElementById("p7").innerHTML = "Include '-'";
			countPhishy++;
		}else{
			document.getElementById("p7").innerHTML = "Not Include '-'";
		}
		//Check URL number of slashs '/'
		var strSlashes = tabs[0].url;
		var stringsearch = "/",strSlashes;
		for(var i=countSlashes=0; i<strSlashes.length; countSlashes+=+(stringsearch===strSlashes[i++]));
			document.getElementById("p8").innerHTML = "Number of slash '/' is " + countSlashes;
		if(countSlashes>5){
			countPhishy++;
		}
		document.getElementById("p9").innerHTML = "Count " +countPhishy;
		//count is greater than or equal to 2 than classify web page phishing
		if(countPhishy>=2){
			document.getElementById("p10").innerHTML = "Phishing!";
			document.getElementById("img1").src='resim3.png' 
		}else{
			document.getElementById("p10").innerHTML = "Legitimate!";
			document.getElementById("img1").src='resim2.png'
		}
	}
);
