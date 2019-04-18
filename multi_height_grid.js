var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  $scope.gridItems = [
    {
      img: 'https://66.media.tumblr.com/dc0aff2b53e904aec596305c31ba80a6/tumblr_nipwxsM7oi1u8gr0so2_1280.jpg',
      headerText: 'Year of Horse 2014 -- designed by Komatsu Hideo',
      blurbText: "In 2013, I originally folded this horse for a high school poster decoration. It was a coincidence that this origami horse I folded in the year of horse became the first in a row of the many animals I later folded for my origami zodiac collection."
    },
    {
      img: 'https://66.media.tumblr.com/2e2de3bca5ab12c58d21f28dd3c470f0/tumblr_nkpt1eMKYx1u8gr0so3_1280.jpg',
      headerText: 'Year of Sheep 2015 -- designed by Naoto Horiguchi',
      blurbText: "Since 2015, I fold each years origami zodiac during Chinese New Year time to cherish the festive spirit. For the year of sheep, I tried a new way to photoshop myself in to the origami picture and sent it to friends as festival greeting. "
    },
    {
      img: 'https://66.media.tumblr.com/0bd8129d1944265b0f94c83290ada401/tumblr_o27ojb0wIT1u8gr0so1_1280.jpg',
      headerText: 'Year of Monkey 2016 -- designed by Komatsu Hideo',
      blurbText: "In 2016. It was my first time to fold a real size origami. I used a 60*60 cm paper and folded it into a origami monkey that could stand on my shoulder. I also used photoshop add in the holiday spirit, hopefully my photoshop skills improved over the past 1 year."
    },
    {
      img: 'http://acsweb.ucsd.edu/~yul411/origami_photos/chicken.gif',
      headerText: 'Year of Roster 2017 --designed by Satoshi Kamiya', 
      blurbText: "In 2017, I took on the challenge to show the process of folding with a stop motion video. This was an idea I've wanted to do for a long time. And this year I finally decided to make one. It was not easy to align the roster at the center of the picture for each frame during folding. It took me two afternoons to finish and I'm very satisfied with the work."
    },
    {
      img: 'http://acsweb.ucsd.edu/~yul411/origami_photos/dog.png',
      headerText: 'Year of Dog 2018 --designed by Satoshi Kamiya', 
      blurbText: "In 2018, I originally had the idea to fold 18 different dogs and take a photo of them together. I started folding early in 2017 summer. But I had a busy fall quarter, and by the time of new year I only finished around 5 dogs. So I later decided to make a scenery in the style of traditional Chinese New Year, with holiday signature color red and gold for luck and the character '福 Fu' for happiness. "
    },
  ];
  $scope.search = '';
  $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
  });
  $scope.filterBySearch = function(gridItem) {
      if (!$scope.search) return true;
      return regex.test(gridItem.headerText + " " + gridItem.blurbText);
  };
  $scope.toggleBlurb = function($event) {
    console.log($event);
  };
});