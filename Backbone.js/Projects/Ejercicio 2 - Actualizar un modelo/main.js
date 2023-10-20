// 1. Creación del Modelo.
var User = Backbone.Model.extend({
    defaults: {
        firstName: '',
        lastName: '',
        age: 0,
        email: ''
    },

    // Función de inicialización del modelo.

    initialize: function() {
        console.log("Nuevo usuario creado");
    }
});

// 2. Creación de un objeto a través de la instancia de User.
var user = new User({
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com'
});

// Conversión del objeto creado a formato JSON.
console.log("Usuario actual: ", user.toJSON());

// 3. Función de actualización del usuario, los parámetros se asignan a las claves del modelo para crear objetos dinámicos.
function updateUser(firstName, lastName, age, email) {
    user.set({
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email
    });
    // Conversión del objeto creado a formato JSON.
    console.log("Usuario actualizado con éxito: usuario actual:", user.toJSON());
}

// 4. Invocación de la función con argumentos.
updateUser('Jane', 'Harrison', 20, 'jane@example.com');
