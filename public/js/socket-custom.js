var socket = io();

// Escuchar    
socket.on('connect', function(){
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor.');
});

// Escuchar mensaje
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Arturo',
    mensaje: 'Hola mundo!'
}, function(resp){
    console.log('Respuesta server: ', resp);
});
