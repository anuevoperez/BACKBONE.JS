Tags: [[Index]]

Los modelos en Backbone.js representan los datos de la aplicación y contienen la lógica de negocio. 

- Cada modelo tiene atributos que pueden ser enlazados a eventos. Cuando los atributos cambian, se desencadenan eventos, permitiendo que otras partes de la aplicación respondan a esos cambios.
- Los modelos pueden comunicarse con un servidor para realizar operaciones CRUD utilizando el objeto `Backbone.sync` o métodos específicos como `save`, `fetch` y `destroy`.

``` JavaScript
var MiModelo = Backbone.Model.extend({
  defaults: {
    atributo1: 'valor1',
    atributo2: 'valor2',
	atributo3: 'valor3'
  }
});
```