function togglePassword() {
  let checkBox = document.getElementById('togglePasswordCheckbox');
  let text = document.getElementById('togglePasswordCheckbox');
  if (checkBox.checked == true) {
    console.log('hallo ik wordt op gedrukt');
    let Password = document.getElementById('password');
    console.log(Password);
    Password.type = 'text';
  } else {
    let Password = document.getElementById('password');
    Password.type = 'password';
  }
}
