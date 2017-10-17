# react_redux_parse_amazon_mock_api_json_response
Will help parse and check Json 
the curreect records ar set up like this:
{
	"feed": [
    {
        "templateId": 1,
        "headerImage": "http://www.8bitrocket.com/wp-content/uploads/2007/07/retroblster_title-800x430.jpg",
        "headerline": "RetroBlaster",
        "body": "Play a Kick ASS Asteroids on Steroids Flash Game.",
        "button":{
            "text": "Play Now",
            "action": "http://www.8bitrocket.com/2007/07/09/retro-blaster/"
            }
        },
	    {
			"templateId": 1,
			"headerImage": "http://www.8bitrocket.com/wp-content/uploads/2007/07/plaindromesplus_title-800x430.jpg",
			"headerline": "Play Palindromes +",
			"body": "Treat your brain to a trick.",
			"button": {
				"text": "Play Now",
				"action": "http://www.8bitrocket.com/2009/12/17/palindromes-plus-2009/"
			}
		}
    ]
}

# User Feed Example has multiple sets of records to test
npm run start to run at 3000

npm run pack to pack to bundle.js


