# Un placer Saludarlos, espero se encuentren muy bien. !!!

Quiero empezar haciendo una descripcion del proyecto en general seguido de las tecnologias que se implementaron  y por ultimo un autofeedBack y el criterio de descicion usado para los distintos compoenetes del proyecto

-*Este proyecto es totalmente responsive la calidad se adpata a todas las pantallas cumpliendo las 3 vistas requeriadas en la prueba y una adicional para pantallas muy grandes para no perder mucha calidad de imagen ademas de que se ve genial. Fue probado en mas de 20 formatos de pantalla para dispositivos moviles entre ellos las gamas mas importantes de Samsung, Iphone, Xiami etc.. 


-*Este proyecto es una vista profesional de un producto de un Ecommerce,  cumple con funciones como un carrusel de Imagenes, un titulo y descripcion del 
del producto, un formulario controlado para escoger las variantes del producto y botones de añadir al carrito y a favoritos cada uno desplegando un mensaje respectivamente

-*Para usar este  proyecto en entorno de desarrollador debes clonarlo o descargarlo y en la raiz de la carpeta origen del proyecto ejecutar 
  
  npm install     para instalar las dependencias 

--**decidi agrgar margenes de controno del celular tal como esta en la prueba, lo vi como mas desafiante y lo fue jajja


<h2> Tecnologias Usadas </h2>
 
 Se Implemento la trilogia que son HTML,CSS, JAVASCRIPT  seguido de la libreria REACT.js para la eestructura del proyecto debido a su comodo lenguaje de lectura y simplicidad en crear componentes, ademas se uso Frameworks como REDUX, REACT-REDUX, para mantener estados globales de la aolicacion desde APP y darle independencia total a los componentes en caso de manteniemiento o modificacion. Se uso AXIOS para  las peticiones a la API, usando FETCH y CATHC el async await no lo vi necesario no habia muchas peticiones que hacer o complejas promesas, en este caso su lectura es sencilla. Debido a que los requerimientos minimos era la trinidad decidi escoger el camino de CSS puro para mostrar mis habiliddes, porquedebido a que use react puede haber usado styled-componets para los estilos. El pilar de todo esto fue NODE.JS
 
 
 <h2> Descripcion de componentes </h2>
 
 Sigiendo las sintaxis estandar de HTML el mi cuerpo de trabajo consta del header,main y footer. el header y el footer consta ded tal <nav> con su color  correspondiente. El main consta de dos secciones (siguiendo los estandares de html) el carrusel de imagenes y el contenedor de toda la informacion. pero  hay un componente desactivado que abarca todo el main que el moadal.  

  Las Secciones del contenedor de la informacion son:  Title, ColorOption, SizeOption ,Total, AddButton, Descripcion.
  
  Respecto al formulario este esta contralado, primero el color por defecto seleccionado al recargar la pagina es rojo, y tiene opcion para color negro debido a que en la informacion de la API solo sine variante negra, los inputs se ajustan segun el color de la variante, para mostrar mas colores se crean las clases en css correspondiente al color que propoercione la API y solo se puede seleccionar un color. La opcionde talla viene desactivada y el usuario puede escojer solo una talla. Esta el input de escoger la cantidad de articulos este nunca es menor a uno ese su valor limite, y cuando se actualiza la cantidad el precio total tambien se actualiza. Los botones de añadir al carrito y a favoritos funcionan y despliegan un modal con titulo e icono correspondiente al button que lo invoca, estos modales muestran el id del articulo si es una variante especifica con talla el modal muestra el id especifico de producto con color y talla enn especifico, en caso de no tener talla muestra el id general del producto.
  
  
  --**Al seleccional el color negro no cambian las imagenes debido a que la API en metodo get no viene color negro, pero esto no es complejo de implementar es una funcion y condicion para cambiar las url de las imagenes dependiendo del color y listo. !!!!

 <H2> Todo fue hecho ha consiencia y con honestidad, consulatas en internet para acordarme de ciertas cosas y ya<!H2>
  
  
