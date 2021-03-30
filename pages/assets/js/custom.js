function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "Windows";
	}

	if (/android/i.test(userAgent)) {
		return "Android";
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "iOS";
	}

	return "unknown";
}

if (getMobileOperatingSystem() == "unknown") {
	//gsap.from(".maintext", {opacity:0, y:-100, x:-200, duration:1, scale:0});
	//var t = TweenMax.to(".mainimg",1,{borderRadius:60, boxShadow:"0px 0px 20px 5px rgba(255,255,255)",repeat:-1,yoyo:true});
	//var t2 = TweenMax.to(".section-title-a",2,{boxShadow:"0px 0px 20px 5px rgba(255,255,255)",repeat:-1,yoyo:true});
	//var tl2 = new TimelineMax();
	//tl2.from(".cataimage", {opacity:0, y:-100, x:-200, duration:1});
	//tl2.from(".catatext", {opacity:0, y:100, x:200, duration:1});
	//var tl3 = new TimelineMax();
	//tl3.from(".eachdiscover", {opacity:0, y:-100, x:-200, duration:1});
}

function download() {
	//alert()
	if (getMobileOperatingSystem() == "Android") {
		window.open(
			"https://play.google.com/store/apps/details?id=com.rankloid.storemia",
			"_blank"
		);
	} else if (getMobileOperatingSystem() == "iOS") {
		window.open(
			"https://apps.apple.com/gh/app/storemia/id1520410097",
			"_blank"
		);
	} else {
		console.log("Not a mobile device");
	}
}
