module.exports.extract = function(window,metadata) {
  
  // Write your solution to Task #2 - Extract Metadata task here
  
  var arrayAll = [];
  var arraySelect = [];
  var key;
  var value;
  var object = {};

  var $ = window.$;
  //get everything that is in the table row in the window
  $("tr td").each(function(){
  	if($(this).attr("class")!=="navigation-list"){
		arrayAll.push($(this).text());
  	}
  });

  //get the select text
  $("tr td select").each(function(){
  	if($(this).attr("name")==="country")
  	{
  		arraySelect.push($(this).text());
  	}
  });

  //exclude out all the unwanted select text
  arrayAll = $(arrayAll).not(arraySelect).get();

  //formating the key
  key = arrayAll.filter(function(v){
  	return v.trim()!=='';
  });
  for (var i = 0; i < key.length; i++){
	key[i] = key[i].trim();
  }

  //get the value from metadata
  value = Object.values(metadata);

  //making an object
  for (var i = 0; i < key.length; i++){
  	object[key[i]] = value[i];
	}

	return object;
}
