(function() {
angular.module('rating.stars',[])
.directive('rating',function(){
  return {
    restrict: 'E',
    scope: {
        callback: '&saveCallback',
        currentRating: '=value'
    },
    link: function(scope,element) {
      var currentRating = scope.currentRating;
      var stars = [];
      var list = element[0].appendChild(document.createElement('ul'));
      list.classList.add('list');

      for (var i = 0; i < 5; i++) {
        var star = document.createElement('li');
        star.classList.add('star');
        star.setAttribute('index', i);
        if (i < currentRating) { star.classList.add('is-active'); }
        list.appendChild(star);
        stars.push(star);
        starMouseOver(star);
        starMouseOut(star);
        starClick(star);
      }

      function iterate(collection, callback) {
        for (var i = 0; i < collection.length; i++) {
          var item = collection[i];
          callback(item, i);
        }
      }

      function starMouseOver(star) {
        star.addEventListener('mouseover', function(e) {
          iterate(stars, function(item, index) {
            if (index <= parseInt(star.getAttribute('index'))) {
              item.classList.add('is-active');
            } else {
              item.classList.remove('is-active');
            }
          });
        });
      }

      function starMouseOut(star) {
        star.addEventListener('mouseout', function(e) {
          if (stars.indexOf(e.relatedTarget) === -1) {
            iterate(stars, function(star, index) {
              if (index < currentRating) {
                star.classList.add('is-active');
              } else {
                star.classList.remove('is-active');
              }
            });
          }
        });
      }

      function starClick(star) {
        star.addEventListener('click', function(e) {
          currentRating = (parseInt(star.getAttribute('index')) + 1);
          iterate(stars, function(star, index) {
            if (index < currentRating) {
              star.classList.add('is-active');
            } else {
              star.classList.remove('is-active');
            }
          });
          scope.callback({rating:currentRating});
        });
      }
    }
  }
});
})();
