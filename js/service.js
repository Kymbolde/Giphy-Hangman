angular.module('giphyApp').service('giphyService', function($http, $q) {
  
  var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
  var limit = '&limit=1'
  var rating = '&rating=pg'
  var apiKey = '&api_key=dc6zaTOxFJmzC';

  this.getGiphy = function(keyword) {

    return $http({
      method: 'GET',
      url: baseUrl + 'q=' + keyword + limit + rating + apiKey
    })
  }

  var savedArray = [];
  this.saveGiph = function(picture) {
    savedArray.push(picture);
    console.log(savedArray);
    return savedArray;
  }
})