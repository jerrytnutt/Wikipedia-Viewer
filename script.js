$(document).ready(function() {


  //Add search bar visibility after clicking on the glyphicon icon

$(".searchIcon").on("click", function() {
  
 
  $( "#query" ).removeClass( "oldSearch" )
  $( "#query" ).addClass( "newSearch" )
  $('.searchIcon').css('visibility', 'hidden')
  $("#search").css('visibility', 'visible')
  
  
  
  
  
});
// Open random wikipedia page function
  $(".wiki").on('click', function(){ 
  
    var url = "http://en.wikipedia.org/wiki/Special:Random"
    window.open(url, '_blank');
});

  // Enter key will acctavate search function
   $("#query").keypress(function(e) { 
     if(e.which == 13) { 
       e.preventDefault(); 
                                                         return fin() } 
   });
  $("#search").on("click", fin)
   
  
   // jquery ajax request for wikipedia API function
  function fin(){
     var query = document.getElementById("query").value;
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&limit=10&format=json&callback=?";
  $.ajax({
    url: url,
    type:'GET',
    dataType: 'jsonp',
    success: function(wikiData) {

   
      {
       

       
  
       //Check if wiki list is empty

        if($('#wikList').is(':empty')){
    for(var i = 1; i < wikiData[1].length; i++){
     console.log(wikiData[1][i]);


       //Append new wikipedia data on to list
 
     $("#wikList").append("<div class='well w1'>"+"<h3>"+ wikiData[1][i]+"</h3>" + "<p>"+wikiData[2][i]+"</p>"+"<a href="+wikiData[3][i]+">"+wikiData[3][i]+"</a>");
    } }else{
      $('#wikList').html('')
      for(var i = 1; i < wikiData[1].length; i++){
      $("#wikList").append("<div class='well w1'>"+"<h3>"+ wikiData[1][i]+"</h3>" + "<p>"+wikiData[2][i]+"</p>"+"<a href="+wikiData[3][i]+">"+wikiData[3][i]+"</a>");
      
      }
    }
      } 
    }
  
 

   
    
 
    
      
    

});
}
//});
   
});

   
 
 

       
  
