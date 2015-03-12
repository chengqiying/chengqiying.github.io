js里	// iPhone Detect
$(document).ready(function () {	
	if (window.navigator.userAgent.indexOf('iPhone') != -1 || window.navigator.userAgent.indexOf('Android') != -1) {
		if (window.navigator.standalone == true) {
			$("#appscreen").show();
		}else{
			$("#install").show();
		}
	}else{
		$("#desktop").show();
	} 
}