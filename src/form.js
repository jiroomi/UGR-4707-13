// form js





document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the input field values
      const nameInput = document.querySelector('input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      const commentInput = document.querySelector('textarea');
  
      // Validate the form inputs
      if (nameInput.value === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }
  
      if (emailInput.value === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return;
      }
  
      if (commentInput.value === '') {
        alert('Please leave a comment.');
        commentInput.focus();
        return;
      }
  
      // Submit the form (you can replace the URL with your desired endpoint)
      form.action = '/action_page.php';
      form.submit();
    });
  });