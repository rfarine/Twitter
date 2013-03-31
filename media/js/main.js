$ = (jQuery);
searchQuery = 'twitter';
tweetsArr = new Array();
tweetIndex = 0;

TwitterAPI = {
	getTweets : {
		getFn : function() {
			var link = "http://search.twitter.com/search.json?q=" + searchQuery + "&amp;rpp=15&amp;include_entities=true&amp;lang=en&amp;callback=?";
			$.getJSON(link, function(r) {
				tweetsArr = r.results;
				tweetIndex = 0;
				TwitterAPI.displayTweets.displayFn();
			});
		}

	},

	displayTweets : {
		displayFn : function() {
			var tweetwrapper = $('#tweet-wrapper');
			var tweet = tweetsArr[tweetIndex];
			var tweettext = tweet.text;

				tweetwrapper.prepend(
					'<div class="tweet">' 
					+ tweettext + 
					'<div class="author">' + 
					'<a href=' + 'http://twitter.com/' + tweetsArr[tweetIndex].from_user + '>' + 
					'@' + tweetsArr[tweetIndex].from_user + '</a>' + '</div>' + 
					'</div>');



					tweetIndex++;
					TwitterAPI.displayTweets.displayFn();
				
		}
	}

}


