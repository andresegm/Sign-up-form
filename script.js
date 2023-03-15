function Validate() {
const pass = document.querySelector('.pass').value;
const passC = document.querySelector('.passC').value;

    if (pass !== passC) {
        console.log('passwords do not match');
    }
}
