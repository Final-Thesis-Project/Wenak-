//api.whatsapp.com/send?phone=+{{ *YOURNUMBER* }}&text=%20{{ *YOUR MESSAGE* }}

https: var yourNumber = "{{00972599832596}}";
var yourMessage = "{{ Hi from whatsapp }}";

// %20 mean space in link
// If you already had an array then you just join them with '%20'
// easy right

function getLinkWhastapp(number, message) {
  number = this.yourNumber;
  message = this.yourMessage.split(" ").join("%20");

  return console.log(
    "https://api.whatsapp.com/send?phone=" + number + "&text=%20" + message
  );
}

getLinkWhastapp();

