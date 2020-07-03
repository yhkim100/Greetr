// gets a new object (the architecture allow us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

/*  General Testing of Greetr Library
g.greet();  //simple informal greeting
g.greet().greet(true) //informal and formal greeting chained together
g.greet().setLang('es').greet(true); //informal, changed language, and formal chained together
g.greet().setLang('fr').greet(true); //invalid language detected 
*/

// Simulate logging in user using Greetr Library
$('#login').click(function() {
  
  // create a new 'Greetr' object (let's pretend we know the name from the login)
  var loginGrtr = G$('John', 'Doe');

  $('#logindiv').hide();

  // fire off an HTML greeting, passing the '#greeting' as the selector and the 
  // chosen language, and log the welcome as well 
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});