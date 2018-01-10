$(document).ready(function() {
  $("button").click(function(){
    var shouted = $("input#shout").val();
    alert(shouted.toUpperCase());
  });
});
