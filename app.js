// Define a new module for our app.
var app = angular.module("search", []);

// The controller

app.controller('searchController', ['$scope', function ($scope) {
  var vm = $scope;
  
  vm.items = [
		{
			url: 'http://en.wikipedia.org/wiki/Mahendra_Singh_Dhoni',
			title: 'Mahendra Singh Dhoni',
			image: 'images/ma.jpg'
		},
		{
			url: 'http://en.wikipedia.org/wiki/Gautam_Gambhir',
			title: 'Gautam Gambhir',
			image: 'images/gu.jpg'
		},
		{
			url: 'http://en.wikipedia.org/wiki/Virat_Kohli',
			title: 'Virat Kohli',
			image: 'images/ko.jpg'
		},
		{
			url: 'http://en.wikipedia.org/wiki/Rohit_Sharma',
			title: 'Rohit Sharma',
			image: 'images/ro.jpg'
		},
		{
			url: 'http://en.wikipedia.org/wiki/George_Bailey_(cricketer)',
			title: 'George Bailey',
			image: 'images/ba.jpg'
		},
		{
			url: 'http://en.wikipedia.org/wiki/JP_Duminy',
			title: 'JP Duminy',
			image: 'images/du.jpg'
		}
	];
}]);

// Create search filter

app.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){
			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});