angular.module("giphyApp").controller("giphyCtrl", function($scope, giphyService) {

 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
var wordArray = ["dancing", "cat", "explosion", "clapping"]

	$scope.getGiphy = function() {
		var randomNumber = Math.floor(Math.random() * (wordArray.length));
		console.log(randomNumber)
		giphyService.getGiphy(wordArray[randomNumber]).then(function(response) {
			$scope.test = response.data.data[0];
			console.log($scope.test)
		});
	}

	$scope.getGiphy();

})