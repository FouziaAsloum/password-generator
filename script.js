const button = document.getElementById('generate');
const password = document.getElementById('password');

button.addEventListener('click', () => {
  password.innerHTML = generatePassword(10);
});

function generatePassword(longueur) {
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 & é"(-è_çà)=~#{[|@]}^$ù*,;:!¨£%µ?./§';
  let passwordGenerated = ``;
  for (let i = 0; i < longueur; i++) {
    passwordGenerated += string.charAt(Math.random() * string.length);
  }
  return passwordGenerated;
}

// function getPassword() {
//   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var password = "";
//   let longueur = document.getElementById('size').value;


//   for (let i = 0; i < longueur; i++) {
//     let randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber + 1);

//     document.getElementById('password').value = password;
//   }
// }