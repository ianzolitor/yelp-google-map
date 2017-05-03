var inputTerm = document.getElementById("search-term")
var inputLocation = document.getElementById("location")
var searchButton = document.getElementsByClassName("search-button")[0]



searchButton.addEventListener("click", businessSearch)


$.ajax({
         url: "https://pelp-api-wdi.herokuapp.com/markers",
         method: "GET",
         success: function(response){
         	console.log(response)
         }
})

function businessSearch(){
	var inputTermNew = inputTerm.value
	var inputLocationNew = inputLocation.value

	$.ajax({
		url: "https://yelp-search.herokuapp.com/search",
		method: "GET",
		data: {
			term: inputTermNew,
			location: inputLocationNew,
			},
			success: function(response){
			console.log(response)
		}
	})

}