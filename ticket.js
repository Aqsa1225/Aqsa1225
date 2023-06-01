document.getElementById("ticket-form").addEventListener("submit", function(event) {
  // Add event listener to the form with ID "ticket-form" and listen for the "submit" event
  
  event.preventDefault();
  // Prevent the default form submission behavior
  
  document.getElementById("message").style.display = "block";
  // Retrieve the element with ID "message" and change its CSS display property to "block"
  // This will make the element visible 
});
