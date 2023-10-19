var User = Backbone.Model.extend({

    defaults: {
        firstName: '',
        lastName: '',
        age: 0,
        email: ''
    },

    /*
        initialize: Método especial llamado al crear un modelo. Usado para tareas de inicialización.
        En este caso, initialize simplemente imprime "Nuevo usuario creado" en la consola cuando se crea
        una instancia del modelo `User`.
    */

    initialize: function() {
        console.log("Nuevo usuario creado");
    }
});

var user = new User({
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com'
});


console.log(user.get('firstName'));
console.log(user.get('lastName'));
console.log(user.get('age'));
console.log(user.get('email'));



