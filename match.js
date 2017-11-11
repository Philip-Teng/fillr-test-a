module.exports.match = function(hash) {

  	// Write your solution to Task #2 - Match Metadata task here
  	var results;

	results = [];

	//compare metadata hash with Regular Expression and append it into the results array
	//then return the results value so that it matches the assertion.
	if(/(card expire date )+(day|month|year)/.test(hash["card expire date day"])){
		   results.push("card expire date day");
	}

	if(/(card expire date )+(day|month|year)/.test(hash["card expire date month"])){
		   results.push("card expire date month");
	}

	if(/(card expire date )+(day|month|year)/.test(hash["card expire date year"])){
		   results.push("card expire date year");
	}
	return results;	
}
