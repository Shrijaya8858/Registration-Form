document.getElementById('registrationForm').addEventListener('submit', function(event) {
  
  event.preventDefault();

  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const termsAccepted = document.getElementById('terms').checked;

  
  if (firstName === '') {
      alert('Please enter your first name.');
      return;
  }

  
  if (lastName === '') {
      alert('Please enter your last name.');
      return;
  }

  
  const emailPattern = /.+@.+\..+/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  
  if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
  }

  
  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  
  if (!termsAccepted) {
      alert('You must accept the Terms of use and Privacy Policy.');
      return;
  }

  alert('Registration successful!');

});