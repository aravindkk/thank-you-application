$("form").submit(function(e) {
   e.preventDefault();

   var val1 = $("#to").val(),
       val2 = $("#message").val();
    var val3="";
   for(var f=0;f<val1.length;f++)
   {
      if((val1[f]>='a' && val1[f]<='z') || (val1[f]>='A' && val1[f]<='Z') || (val1[f]>='0' && val1[f]<='9'))
       val3+=val1[f];
      if(val3.length>19)
       break;
   }  
    var newTweet = "@coursera: "+"%23" + val3 + ": "  + val2 + " via goo.gl/sccOA " +" %23tcera";
    window.location = "https://twitter.com/intent/tweet?text=" + newTweet;
});
