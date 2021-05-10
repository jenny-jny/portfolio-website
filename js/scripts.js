//Real time form validation
(function(){
  let form = document.querySelector('form');
  let emailInput = document.querySelector('#contact-email');

  function showErrorMessage(input, message){
    let container = input.parentElement;

    //remove any existing error
    let error = container.querySelector('.error-message');
    if(error){
      container.removeChild(error);
    }

    //Now add the error if the message isn't empty
    if(message){
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      
      let telephoneLabel = document.querySelector('#telephone-label');

      container.insertBefore(error, telephoneLabel);
    }
  }

  function validateEmail(){
    let value = emailInput.value;

    if(!value){
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }
    if(value.indexOf('@') === -1){
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }
    if(value.indexOf('.') === -1){
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  emailInput.addEventListener('input', validateEmail);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateEmail()){
      alert('Success!');
    }
  });
})();