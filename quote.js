$(document).ready(function() {

	$("#btnGetQuote").click(function() {
		$.get("https:api.github.com/zen",fetchApi)
	});
	var fetchApi = function(data){
		$(".quote").text(data);
	}
});