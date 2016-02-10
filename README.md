## Star rating directive

Directive for angularjs to rate anything you want with 1-5 stars.

## Usage

* Install via [bower](http://bower.io/) or you can check out the [source](https://github.com/JVojczekhovskiy/rating.stars) and install it yourself.

 `bower install --save rating.stars`
 
 `git clone git://github.com/JVojczekhovskiy/rating.stars`
* Add `rating.stars` to your application's module dependencies.
* Include script and css in your HTML.

      ```html
      <script src="/dist/rating.stars.js"></script>
      
      <link rel="stylesheet" type="text/css" href="dist\rating.stars.css">
      ```
* Use the `rating.stars` directive.

## Example

* You can place the rating tags anywhere you want on your webpage.	
      `<rating save-callback='mySaveRatingFunction(rating)' value='myRating'></rating>`
* The save-callback tag is the function wich will be executed when the user clicks on a star.
* The value tag is the index of the current rating.
	

