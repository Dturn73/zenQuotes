$(document).ready(function() {

	var fetchApi = function(data){
		$(".quote").text(data);
	}

	$.get("https:api.github.com/zen",fetchApi)
	
});