
const pass = document.querySelector('.pass');
const passC = document.querySelector('.passC');
const error = document.querySelector('.error');

passC.addEventListener("input", function (event) {
    if (pass.value !== passC.value) {
          error.textContent = 'Passwords do not match';
        } else {
          error.textContent = '';
            }
    }); 
