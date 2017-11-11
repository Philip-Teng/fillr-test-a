module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here
	var $ = window.$;
          $("table tr td").each(function(){
              //print the input's attribute names
              var findHREF = $(this).find('td:first-child:has(a)');
              var findInput = $(this).find('td:first-child:has(input)');
              // console.log(findInput.length);
              // console.log(findHREF.length);
               		// console.log($(this).text());
              
        });
}
