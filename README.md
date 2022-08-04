# Proyect_ACO

## Explicacion del proyecto:

Este proyecto personal va a ser usado en mi ambito laboral para facilitar el labor del dia a dia, actualmente recibimos tareas con fecha, direccion y descripcion de la misma, sin tener un registro mas que un mensaje de wpp.


## Objetivo:

Crear una aplicacion la cual puede ser administrada por cualquier trabajador que tenga una cuenta autorizada, pudiendo hacer un CRUD de tareas.
La funcionalidad seria ingresar las tareas, que se registren en una base de datos, asignarle un estado de "pendiente" a las tareas aun no realizadas y "hechas" a las que si lo fueron, ordenandolas en diferentes secciones, manteniendo un orden y registro de las mismas.


## Modo de abordar el trabajo:

Primero elegimos lo que vamos a usar, en este caso como DB usaria MongoDB porque no cuento con muchas relaciones para hacer, son tareas que cualquier usuario puede modificar, tampoco requiero hacer transacciones, y es mas escalable por si futuramente requiero agregar mas funcionalidades.
Para autorizar a los usuarios se usaria JWT
Trabajaria con Node.js para backend con Express
En frontEnd trabajaria con JS tambien, CSS (Boostrap), como motor de plantillas usaria nunjucks por la misma razon que mas adelante podria precisar mas rutas, para usuarios, para clientes, para las tareas de cada cliente etc...

