
document.addEventListener('DOMContentLoaded', function() {
    var modelo = document.querySelector('#modelo');
    var camera = document.getElementById('camera');

    modelo.addEventListener('loaded', function() {
        console.log('Modelo GLB cargado correctamente.');
        // Puedes agregar aquí cualquier lógica adicional que desees ejecutar después de que el modelo se haya cargado
    });

    // Maneja el evento 'model-error' que se dispara si hay un error al cargar el modelo GLB
    modelo.addEventListener('model-error', function() {
        console.error('Error al cargar el modelo GLB.');
    });
    
    
});



