var inputTerm = document.getElementById("search-term")
var inputLocation = document.getElementById("location")
var searchButton = document.getElementsByClassName("search-button")[0]
var searchResults = document.getElementsByClassName("search-results")[0]

var realResults = document.getElementsByClassName("real-search-results")

for (var i = 0; i < realResults.length; i++) {
	realResults[i].addEventListener("click", saveInfo)
}


searchButton.addEventListener("click", businessSearch)
objectInfo = []

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
			response.businesses.forEach(function(object){
			objectInfo = object
			searchResults.innerHTML += "<div class = 'real-search-results'>" +object.name + "</div>"


			})
		}
	})

}



function saveInfo (){

}