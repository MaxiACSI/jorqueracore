// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Importa el paquete de lucide
import { createIcons, icons } from 'lucide';

createIcons({
  icons,
});

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;
  const telefono = '+56994166766'; // Reemplaza esto con tu número de WhatsApp

  const textoCompleto = `Hola, soy ${nombre}. ${mensaje}`;
  const encodedText = encodeURIComponent(textoCompleto);
  
  window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${encodedText}`, '_blank');
});