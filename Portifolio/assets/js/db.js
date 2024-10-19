function sendMail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const phone = document.getElementById('phone').value;

  const data = {
    name: name,
    email: email,
    message: message,
    phone: phone
  }

  console.log('Aqui esta meu dados ' + data)

}