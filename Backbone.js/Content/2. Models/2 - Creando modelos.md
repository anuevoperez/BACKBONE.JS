Tags: [[Index]]

En Backbone.js, los modelos se crean extendiendo la clase **Backbone.Model**

Para incluir la biblioteca de Blackbone.js en el proyecto, podemos hacerlo de la siguiente manera:

1. Importar las librerias a través del CDN.

``` HTML
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js"></script>
    <title>Backbone.js Model</title>
</head>
</html>
```

2. Definir un modelo extendiendo de **Backbone.Model** y especificando sus atributos predeterminados:

``` Js

var User = Backbone.Model.extend({
    defaults: {
        firstName: '',
        lastName: '',
        age: 0,
        email: ''
    },

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

/* 
initialize: Método especial llamado al crear un modelo. Usado para tareas de inicialización. 
En este caso, initialize simplemente imprime "Nuevo usuario creado" en la consola cuando se crea una instancia del modelo `User`.
*/

initialize: function() { 
	console.log("Nuevo usuario creado");
}
```