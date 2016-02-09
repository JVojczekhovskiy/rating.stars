## Star rating directive

Directive for angularjs to rate anything you want with 1-5 stars.

## Usage

1. Install via [bower](http://bower.io/) or you can check out the [source](https://github.com/JVojczekhovskiy/rating.stars) and install it yourself.
    -`bower install --save rating.stars`
	-`git clone git://github.com/echonest/pyechonest.git`
2. Add `rating.stars` to your application's module dependencies.
3. Include script and css in your HTML.
      ```html
      <script src="/dist/rating.stars.js"></script>
      <link rel="stylesheet" type="text/css" href="dist\rating.stars.css">
      ```
4. Place the img of the stars in the right folder and adjust the path to that img in the rating.stars.css file.
5. Use the `rating.stars` directive.

## Example

You can place the rating tags anywhere you want on your webpage.	
	  ```html
      <rating save-callback='mySaveRatingFunction(rating)' value='myRating'></rating>
      ```
The save-callback tag is the function wich will be executed when the user clicks on a star.
The value tag is the index of the current rating.
	

