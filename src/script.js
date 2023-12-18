function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}




  document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropdown-button');
    var dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownButton.addEventListener('click', function() {
      if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    });
  });


  


  function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Perform validation
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
  
    if (message.trim() === "") {
      alert("Please enter a message.");
      return;
    }
  
    
    alert("sent successfully!"); // success message alert
    document.getElementById("contactForm").reset(); // Reset form fields
  }

