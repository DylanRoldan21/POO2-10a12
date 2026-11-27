// ==========================================
// ALUMNO 9: LÓGICA DE CONTACTO, NEWSLETTER Y FOOTER
// ==========================================

// 1. DEFINIR EL NÚMERO DE WHATSAPP (Obligatorio)
// Reemplaza este número por el que te hayan asignado en tu tarea
const NUMERO_WHATSAPP = "+51987654321"; 

document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL FORMULARIO DE CONTACTO Y WHATSAPP ---
    const formContacto = document.getElementById("a9-formulario-contacto");
    const btnWhatsapp = document.getElementById("a9-btn-whatsapp");

    // Función que se ejecuta al hacer clic en "Enviar mensaje"
    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que la página se recargue

            // Obtener los valores de los campos
            const nombre = document.getElementById("a9-nombre").value.trim();
            const celular = document.getElementById("a9-celular").value.trim();
            const motivo = document.getElementById("a9-motivo").value;
            const mensaje = document.getElementById("a9-mensaje").value.trim();

            // TAREA 4: VALIDACIONES
            if (nombre === "") {
                alert("Por favor, ingresa tu nombre.");
                return;
            }
            // Validar que el celular tenga exactamente 9 dígitos
            if (celular.length !== 9 || isNaN(celular)) {
                alert("El número de celular debe tener exactamente 9 dígitos numéricos.");
                return;
            }
            if (motivo === "") {
                alert("Por favor, selecciona un motivo de contacto.");
                return;
            }
            if (mensaje === "") {
                alert("Por favor, escribe tu mensaje.");
                return;
            }

            // Si todo está bien, construimos el enlace de WhatsApp
            const textoWhatsApp = `Hola, soy ${nombre}. Mi celular es ${celular}. Motivo: ${motivo}. Mensaje: ${mensaje}`;
            const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP.replace('+', '')}?text=${encodeURIComponent(textoWhatsApp)}`;
            
            // Abrimos WhatsApp en una nueva pestaña
            window.open(urlWhatsApp, '_blank');
            
            alert("¡Redirigiendo a WhatsApp!");
            formContacto.reset(); // Limpiamos el formulario
        });
    }

    // --- LÓGICA DEL BOTÓN FLOTANTE DE WHATSAPP ---
    // Esto hace que si hacen clic directo en el botón flotante, también funcione
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", function(event) {
            event.preventDefault();
            const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP.replace('+', '')}?text=Hola, me gustaría más información sobre la tienda.`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    // --- LÓGICA DEL NEWSLETTER ---
    const formNewsletter = document.getElementById("a9-form-newsletter");
    
    if (formNewsletter) {
        formNewsletter.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita recargar la página
            
            const email = document.getElementById("a9-email-newsletter").value.trim();
            
            // TAREA: Validación básica de correo
            // Busca que tenga un "@" y un "."
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            
            if (!emailValido) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

            // TAREA 5: Mensaje de éxito
            alert(`¡Gracias por suscribirte! Usa el código TIENDA10 para obtener tu descuento.`);
            formNewsletter.reset(); // Limpiamos el campo
        });
    }
});