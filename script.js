

const whatsappWeb = require('whatsapp-web.js');
const client = new whatsappWeb.Client();

client.on('qr', (qr) => {
  console.log('QR Code:', qr);
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message) => {
  console.log('Message received:', message.body);
});

document.getElementById('link-with-qr-code').addEventListener('click', () => {
  const phoneNumber = document.getElementById('phone-number').value;
  if (phoneNumber) {
    client.initialize();
    window.location.href = 'qr-code-page.html'; // Replace with your QR code page URL
  } else {
    alert('Please enter your WhatsApp phone number');
  }
});

document.getElementById('link-with-pair-code').addEventListener('click', () => {
  const phoneNumber = document.getElementById('phone-number').value;
  if (phoneNumber) {
    client.initialize();
    window.location.href = 'pair-code-page.html'; // Replace with your pair code page URL
  } else {
    alert('Please enter your WhatsApp phone number');
  }
});
