# TodoApp React.js

# Documentación

[React - Una biblioteca de JavaScript para construir interfaces de usuario](https://es.reactjs.org/)

### Atajos de teclado

- rfc
    
    ```jsx
    //rfc
    import React from 'react'
    
    export default function App() {
      return (
        <div>App</div>
      )
    }
    ```
    
- rfce → Export default
    
    ```jsx
    import React from 'react'
    
    function TodoCounter() {
      return (
        <div>TodoCounter</div>
      )
    }
    
    export default TodoCounter
    ```
    

# Primeros pasos con React

## Cómo aprender React.js

## ¿Qué es React.js?

React es una herramienta de JavaScript en el front end que nos ayuda a construir la parte visual de nuestras aplicaciones web, las interfaces con las que van a interactuar nuestros usuarios.

React es una librería progresiva, esto porque puedes hacer desde una página sencilla hasta poder desarrollar aplicaciones gigantes, y llegar a convertirse en un framework en conjunto de muchas herramientas que existen a su alrededor.

Mayor demanda laboral

Seguir escuela en orden

También podemos profundizar en js y react al mismo tiempo. Hay diferentes opiniones al respecto

La recomendación de Juan es manejar estos temas

- [HTML y CSS](https://platzi.com/cursos/html-css/)
- [JavaScript](https://platzi.com/cursos/basico-javascript/)
- [ECMAScript 6+](https://platzi.com/cursos/ecmascript-6/)
- [Clousures y Scope](https://platzi.com/cursos/scope/)
- [POO](https://platzi.com/cursos/javascript-poo/)
- [JavaScrip Engine](https://platzi.com/cursos/javascript-navegador/)
- [Asincronismo](https://platzi.com/cursos/asincronismo-js/)
- [Peticiones a API](https://platzi.com/cursos/api/)
- [Manipulación del DOM](https://platzi.com/cursos/dom/)
- [Frameworks y librerías de JavaScript](https://platzi.com/cursos/frameworks-javascript/)

React es mucho más libreria que framework, pero ninguna herramienta es 100% framework o librería.

## Cuándo usar React.js

Para saber cuándo usar React es necesario conocer el **tipo de proyecto** que estás desarrollando. Conociendo los alcances actuales y los futuros, podrás tener un panorama completo de las necesidades que vas a cubrir y cuáles son las funciones básicas que debe tener para ser un MVP.

React es muy útil cuando queremos construir rápidamente la primera versión funcional de una aplicación web sin sacrificar su **escalabilidad**. Si no necesitamos escalarla después, no es necesario utilizar React, podemos utilizar JavaScript vanilla.

- **¿Qué es un MVP?**
    
    MVP (Minimum Viable Product - Producto Mínimo Viable): se refiere a construir funcionalidades pequeñas que sean completas para que podamos lanzarla y medir su impacto y decidir si seguir ese camino o probar otra cosa.
    

### Flujos de trabajo para aplicaciones web

**Modelo de cascada**

Cada equipo tiene un tiempo para hacer todo su respectivo trabajo para construir una aplicación.

Es problemático porque el esfuerzo puede ser en vano porque no se tiene un feedback hasta que se termina de construir la app.

![Untitled](TodoApp%20React%20js%20534285bcbc3c4c0b92db602e051818d4/Untitled.png)

**Modelo del ciclo MVP iterativo**

El modelo del ciclo MVP se refiere a que cada equipo se enfocará en ciclos pequeños para construir partes más pequeñas de una app que en conjunto se puedan ir ensamblando para hacer la app completa.

Resuelve el problema del modelo anterior, aquí se recibe el feedback al terminar cada pequeño ciclo, recibiendo así el feedback de manera más inmediata que antes.

Podemos hacer esfuerzos cortos.

![Untitled](TodoApp%20React%20js%20534285bcbc3c4c0b92db602e051818d4/Untitled%201.png)

Debemos crear funcionalidades completas, no solamente el footer o header
Escoger el problema más crucial para que la app lo resuelva

![Untitled](TodoApp%20React%20js%20534285bcbc3c4c0b92db602e051818d4/Untitled%202.png)

### Análisis: componentes y comportamientos

**Componentes**: son la forma de estructurar las **piezas** de nuestra página web para hacerlas escalables, nos ahorran tiempo y esfuerzo. Son **abstracciones de los elemento**s de nuestra página web para ser reusados las veces que necesitemos. (no copiar y pegar)

Los componentes pueden trabajar de manera independiente a los demás, pero **con React todos los componentes tienen una conexión con el resto de componentes**, para que en conjunto puedan reaccionar al comportamiento de los usuarios.

**Comportamiento**: **cómo actúan** nuestros componentes con las **interacciones** de los usuarios.

![https://www.techdiagonal.com/wp-content/uploads/2019/08/React-components-blog-image.jpg](https://www.techdiagonal.com/wp-content/uploads/2019/08/React-components-blog-image.jpg)

## Cambios en React 18: ReactDOM.createRoot

React 18 fue publicado el 29 de marzo de 2022. Sus cambios más importantes van a ayudar muchísimo para optimizar el render e hidratación de aplicaciones o componentes de React en el DOM. El más importante, crucial y significativo fue la migración de ReactDOM.render a ReactDOM.createRoot.

En la próxima clase vamos a usar Create React App, una de las herramientas más populares para instalar un entorno de desarrollo con React.js de forma muy rápida. No hay absolutamente ningún problema si decides usar React 18. Solo ten en consideración los cambios para hacer el render principal de tu aplicación.

- **Migración de ReactDOM.render a ReactDOM.createRoot**
    
    ```jsx
    //antes
    const root = document.getElementById('root');
    ReactDOM.render(e(LikeButton), root);
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    
    //React 18
    const rootElement = document.getElementById('root');
    const root = ReactDom.createRoot(rootElement);
    root.render(e(LikeButton));
    
    const rootElement = document.getElementById('root');
    const root = ReactDom.createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```
    

## Instalación con Create React App

Una manera muy sencilla de crear un proyecto con React es utilizando Create React App, así puedes iniciar un proyecto sin preocuparte por la configuración de herramientas como webpack o babel.

💡 Aunque siempre será mejor si nosotros hacemos esta configuración desde cero, ya que tendremos mayor control de todo e incluso nuestra aplicación tendría un mejor rendimiento.

### Maneras de instalar React

Existen varias formas de trabajar con React, cada una tiene sus ventajas y desventajas, siempre que trabajemos con React necesitaremos las dependencias react y react-dom.

- **React en JavaScript vanilla**
    
    Podemos importar los scripts del código fuente de React, existen las versiones para desarrollo que nos facilita debuggear y para producción que está optimizada para el producto final.
    
    React con JavaScript vanilla casi no se usa, lo ideal es crear un entorno de desarrollo que facilite nuestro trabajo.
    
    [Agregar React a un sitio web - React](https://es.reactjs.org/docs/add-react-to-a-website.html)
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React en js </title>
    </head>
    <body>
        <div id="like_button_container"></div>
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
        <script>
            'use strict';
    
            //crea el elemento
            const e = React.createElement;
    
            class LikeButton extends React.Component {
                constructor(props) {
                super(props);
                this.state = { liked: false };
                }
    
                render() {
                    if (this.state.liked) {
                        return 'You liked this.';
                    }
    
                    return e(
                        'button',
                        { onClick: () => this.setState({ liked: true }) },
                        'Like'
                    );
                }
            }
            
            const domContainer = document.querySelector('#like_button_container');
            const root = ReactDOM.createRoot(domContainer);
            root.render(e(LikeButton));
            
        </script>
    </body>
    </html>
    ```
    
- **Configuración manual desde cero (forma profesional)**
    
    npx esta en la pc si tenemos instalado node y npm
    
    Nos permite instalar de manera temporal lo que necesitamos.
    Siempre tendremos su versión actualizada
    
    ```bash
    
    npx create-react-app nombre-del-proyecto 
    ```
    
    *npx create-react-app nombre-del-proyecto --template typescript* 
    para typescript y en unos instantes tendremos un entorno de desarrollo totalmente configurado para comenzar a trabajar.
    

### Entorno de Create React App

Dentro de este entorno tenemos un archivo **package.json** en el que se encuentran nuestros scripts, dependencias y meta datos de nuestro proyecto, 

**"react-scripts":** nos configura todo, pero no tan optimizado como si hiciéramos todo manual con webpack y babel

También tendremos dos carpetas principales:

**public**/: Es la carpeta pública en donde tendremos nuestro archivo HTML y algunos assets

**src**/: Es la carpeta fuente, en donde tendremos todos nuestros archivos de trabajo
Dentro del index.html siempre tendremos un div con un id, como root que será la raíz de nuestro proyecto, y la usaremos para empezar a construir con JavaScript:

- **¿Cómo inicializar nuestro servidor?**
    
    Para iniciar el entorno de desarrollo podemos ejecutar el comando **npm start,** con esto tendremos nuestro servidor corriendo en el puerto 3000 y también se refrescará automáticamente con cualquier cambio hecho en el proyecto. (A excepción de los cambios hechos en el archivo index.js).
    

# Fundamentos de React: maquetación

## JSX: componentes vs. elementos (y props vs. atributos)

JSX es una extensión de JavaScript creada por Facebook para usarse con React.js. Nos presenta muchas ventajas el trabajar con elementos y componentes muy similar a la sintaxis de HTML.

La función que JSX tiene es de ser un preprocesador y transformar el código a JavaScript.

💡 JSX es solamente azúcar sintáctica para el método React.createElement(component, props, ...children) de React.

Parece HTML pero no lo es. 

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//renderizamos el componente creado en App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### ¿Cómo crear un componente?

Existen varias formas de crear un componente en React, por convención siempre los creamos utilizando PascalCase (La primera letra de cada palabra en mayúscula y juntas).

- **Crear un componente con clases**
    
    Este es el modo que se empleaba antes, ahora ya casi nadie la utiliza, pero es bueno saber cómo funciona, por si llegamos a trabajar con proyectos que las usen, con el método render podemos renderizar el JSX que retorna nuestra clase.
    
    ```jsx
    class Componente extends React.Component {
    	render() {
    		return (
    		    // JSX
    		)
    	}
    }
    ```
    

### **Crear un componente con funciones**

Los componentes funcionales son los más utilizados hoy en día, ya que nos permiten controlar el ciclo de vida mucho más fácil con los **hooks de React:**

```jsx
function Component() {
    return (
        // JSX
    )
} 

// Utilizando arrow function
const Component = () => {
    return(
        // JSX
    )
}
```

Podemos usar variables

```jsx
<img src={logo} className="App-logo" alt="logo" />
```

### Componentes vs. Elementos

Los componentes son invisibles para HTML, pero no para React, de hecho React utiliza los componentes para renderizar, y optimizar los re-renderizados.

- **Componente**
    
    Un componente es una pieza de código que describe una parte reutilizable de la interfaz, recibe propiedades y retornan elementos, dentro de los componentes podemos utilizar variables de JavaScript con ayuda de las llaves {}.
    
    ```jsx
    const Component = () => {
        const titulo = Soy un título;
        
        return(
            <h1>{titulo}</h1>
        )
    }
    ```
    
- **Elemento**
    
    Un elemento es lo que devuelve un componente, es una representación de un nodo en el DOM. Lo que renderiza React
    
    ```html
    <h1>Soy un título</h1>
    ```
    

### Propiedades vs. Atributos

La diferencia principal es que un atributo no se puede **modificar** y una propiedad si, ya que los atributos son de HTML y las propiedades son de JavaScript..

- **Atributo**
    
    Los atributos los pueden tener las etiquetas de HTML.
    
    ```html
    <!-- Por ejemplo el atributo class -->
        <h1 class="titulo">Soy un título</h1>
    ```
    
- **Propiedad**
    
    Las propiedades las pueden recibir los elementos y componentes en React.
    
    ```jsx
    const Component = () => {
        return(
            <h1 className="titulo">
                Soy un titulo
            </h1>
        )
    }
    ```
    

Es importante notar que algunos atributos de HTML se escriben diferentes como propiedades, por ejemplo; el atributo class de HTML no se debe utilizar como propiedad de una clase o elemento de React, porque class es una palabra reservada para crear clases en JavaScript, en su lugar utilizamos **className**.

### Pasando propiedades a nuestros componentes

En index.js. Esto no es un atributo. Es una propiedad

```jsx
<App saludo="Hola" />
```

En App.js lo recibimos por parámetro.

Por convención les decimos propiedad **props**

```jsx
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.saludo}
        </a>
      </header>
    </div>
  );
}
```

### Propiedad children

También podemos utilizar los componentes de React como etiquetas abiertas, para pasarle contenido, elementos o incluso otros componentes, la manera de acceder a ellos es con la propiedad especial children.

```jsx
//index.js
<App> Buenassss </App>

//App.js
{props.children}
```

## Componentes de TODO Machine

Necesitamos crear

- **Counter:** para llevar un conteo de las tareas totales y las completadas.
- **Search**: para filtrar los TODOs de la lista.
- **List**: en donde tendremos cada uno de los TODOs.
- **Item**: será cada uno de los TODOs.
- **Add Todo**: botón para agregar un nuevo TODO.

Adicionalmente, tendremos que crear un modal para ingresar los datos del nuevo TODO (Lo veremos más adelante).

Para empezar a trabajar en el código, primero eliminaremos algunos archivos que no son necesarios para nuestra aplicación, solamente dejaremos dentro de nuestra carpeta `src/` los archivos `index.js`, `App.js` y los estilos.

```jsx
function App() {
  return (
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
  );
}

export default App;
```

Una vez iniciamos el proyecto nos aparecerá un error como el siguiente: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag., esto es porque solamente se puede regresar un solo componente al trabajar con JSX, si queremos regresar varios necesitamos encerrarlos en un solo elemento padre.

Utilizar el componente **Fragment**, que será invisible al momento de renderizar nuestros elementos en el DOM.

- **Maneras de utilizar Fragment en React**
    
    ```jsx
    import React from "react
    
    function App() {
      return (
        <React.Fragment>
            ...
        </React.Fragment>
      );
    }
    
    // Desestructurándolo desde React
    import { Fragment } from "react
    
    function App() {
      return (
        <Fragment>
            ...
        </Fragment>
      );
    }
    ```
    
    Esta es la más común. Envolviendo nuestros elementos dentro de etiquetas vacías, que es lo equivalente a React.Fragment
    
    ```jsx
    function App() {
      return (
        <>
            ...
        </>
      );
    }
    ```
    

### Creamos los componentes con su respectivo contenido y luego los importamos

- TodoCounter.js
    
    Va  a llevar la cuenta de las tareas realizadas y pendientes
    
    ```jsx
    import React from 'react'
    
    function TodoCounter() {
        return (
            <h2>Has completado 2 de 3 </h2>
        )
    }
    
    export { TodoCounter }
    /* utilizamos export nombrado para obligarnos a usar los nombres 
    correctos que son los descriptivos */
    ```
    
- TodoList.js
    
    ```jsx
    import React from 'react'
    
    function TodoList(props) {
        return (
            <section>
                <ul>
                    {props.children}
                </ul>
            </section>
        )
    }
    
    export { TodoList }
    ```
    
- TodoItem.js
    
    ```jsx
    import React from 'react'
    
    function TodoItem(props) {
        return (
            <li>
                <span>C</span>
                <p>{props.text}</p>
                <span>X</span>
            </li>
        )
    }
    
    export { TodoItem }
    ```
    

```jsx
//App.js
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
```

Para que recorra los TODOs

```jsx
const todos = [
  { text:'Cortar cebolla', completed: false },
  { text:'Llorar con la llorona', completed: false },
  { text:'Curso React', completed: false },
];

function App() {
  return (
    <>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
/* esto lo mandamos en el children */
      { todos.map( todo => (
        <TodoItem key={todo.text} text={todo.text} />
      ))}
    </TodoList>
    <CreateTodoButton />
    </>
  );
}
```

Le pasamos key, ya que de lo contrario en consola nos mostraría el error 

Warning: Each children in a list should have a unic "key" prop.

Esto es porque cuando renderizamos varios elementos en una lista debemos que pasarle una propiedad especial a cada item, que es key, esta propiedad ayuda a React para mantener un registro de los elementos que han cambiado, y saber cuál elemento es cuál, también es importante que esta propiedad no se repita en ningún otro item.

## CSS en React

Existen varias [formas de agregar estilos en React](https://platzi.com/blog/react-css/):

- Hoja de estilos externa: podemos crear nuestro archivo CSS con todos nuestros estilos y después importarlo.
- Estilos en línea: así como en HTML, también podemos agregar estilos en línea, pero con una diferente sintaxis

A TodoList le mandamos si está completa la tarea o no entonces nos va a aparecer el check

```jsx
{ todos.map( todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
      ))}
```

![Untitled](TodoApp%20React%20js%20534285bcbc3c4c0b92db602e051818d4/Untitled%203.png)

# Fundamentos de React: interacción

## Manejo de eventos

Manejar eventos en React es muy similar a manejar eventos en el DOM, solo necesitamos pasarle una propiedad **on + evento**, por ejemplo: `onClick`, `onChange`, `onMouseOver`, que será igual a una función en la que estará el código que se ejecutará cuando ocurra dicho evento.

```jsx
<button 
        className='CreateTodoButton'
        /*todo lo que empieza con on -> escuchar evento 
        enviamos función*/
        onClick={()=> console.log('Hubo click')}
        >+</button>
```

A diferencia de los eventos del DOM, para manejar eventos en React tenemos unas pequeñas diferencias en la sintaxis:

1. En React los eventos son nombrados usando ***camelCase***.
2. Tenemos que pasar una función, ya sea en línea o almacenada en una variable.
3. No puedes regresar `false` para prevenir el comportamiento por defecto, debes utilizar `preventDefault` explícitamente.

```jsx
<button onClick={click}></button>
```

> ✅ Es importante siempre pasar una función.
> 

### Por qué a veces necesitamos arrow function

Cualquier evento recibe sí o sí una función, es decir, debemos mandarle sí o sí una función para que React internamente pueda ejecutarla en cuanto dicho eventop ocurre..

El asunto, es que tiene que ser sí o sí una función que React pueda ejecutar, por eso no podemos mandar directamente un console.log() ni un alert(), porque aunque ambos son funciones, nosotros estamos ejecutándolas directamente al ponerles los paréntesis, pero nosotros no debemos ejecutarlas, nosotros solo debemos mandarlas y ya React se encargará de ejecutarlas..

Es por eso que mandamos arrow functions, porque estas son funciones que React puede ejecutar cuando quiera, y pues dentro de esas arrow functions está el código que queremos ejecutar cuando el evento suceda.

Sin embargo, recordando que los eventos reciben funciones, yo puedo crear una variable que dentro guarde una función,

```jsx
const adentroTengoUnaFuncion = () => {
    console.log("Hola");
    console.log("Soy una función que está siendo guardada dentro de una variable UwU");
}
```

Yo puedo ejecutar esta función sin problemas de esta forma adentroTengoUnaFuncion(), pero también puedo mandarsela a React para que él lo ejecute cuando quiera (en este caso, cuando el evento suceda):

```jsx
onClick={adentroTengoUnaFuncion}

```

Nota como aquí mandamos la función sin paréntesis, esto es porque en el momento en el que le ponemos paréntesis seríamos nosotros quienes ejecutan la función, pero recuerda que nosotros no debemos ejecutar la función, sino React es quien tiene que ejecutarla. ¿Por qué? Pues porque si la ejecutamos nosotros, esta se va a ejecutar justo en el momento que esa línea de código sea leída por nuestra computadora, y nosotros no queremos eso, nosotros queremos que nuestra función se ejecute únicamente cuando el evento suceda, por eso la mandamos sin paréntesis, para que React pueda ejecutarla cuando dicho evento ocurra 😄

### Pasando argumentos a escuchadores de eventos

En React no tenemos que ejecutar el código nosotros, React ya maneja esto por debajo, solo es necesario pasar una función, **React solito la ejecutará cuando ocurra el evento que estemos escuchando.**

Si necesitamos pasar argumentos a nuestras funciones, necesitamos **encerrar nuestra función dentro de otra función**, esto porque al pasarle argumentos a una función la estamos ejecutando, veamos un ejemplo:

```jsx
function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  
  return (
    <>
        {/* ✅ */}
        <button
          className="CreateTodoButton"
          onClick={() => onClickButton('Aquí se debería abrir el modal')}
        >
          +
        </button>
        {/* ❌ */}
	/* debemos envolver para que no se ejecute */
        <button
          className="CreateTodoButton"
          onClick={onClickButton('Esta función se ejecuta al inicio, no al presionar el botón'}
        >
          +
        </button>
    </>
  );
}
```

```jsx
//TodoItem
/* llamamos cuando usuario hace click en el check*/
    const onCompleted = () => {
        alert('Ya completaste el todo ' + props.text)
    }
    /* llamamos cuando usuario hace click en la x*/
    const onDeleted = () => {
        alert('Borraste el todo ' + props.text)
    }
```

Dentro de estos eventos también puedes recibir como parámetro la información del evento, en donde puedes encontrar propiedades muy interesantes, como por ejemplo, el valor de algún `input` , con `event.target.value`

```jsx
function TodoSearch() {
    /* tenemos que reaccionar a cada cambio en el input
    Con el evento vemos lo que está pasando 
    target nos da una referencia a nuestro input*/ 
    const onSearchValue = (event) => {
        console.log(event.target.value)
    }
    return (
        <input className='TodoSearch' placeholder="Buscar Tarea" 
        onChange={ onSearchValue }
        />
    )
}
```

[Manejando eventos - React](https://es.reactjs.org/docs/handling-events.html)

## Manejo del estado

El estado en React nos ayuda a crear **datos mutables** o datos que pueden ser modificados. 

Pueden cambiar cuando el usuario haga algo (evento)

En App generamos estado y lo pasamos a los hijos por props

Para manejar el estado depende del si nuestro componente es generado con una clase o si es un componente funcional.

- **Clase:** Para manejar el estado dentro de una clase podemos crearlo en el constructor de la clase, y para actualizarlo utilizamos el **setter** `setState`
- **Función** Si estamos en un componente funcional podemos utilizar el hook de estado, que nos regresará arreglo con un **getter** (que será el valor de nuestro estado) y un **setter** (una función para actualizar el estado).
- **¿Qué son los Hooks?**
    
    Los Hooks son funciones que te permiten enganchar el estado de React y el ciclo de vida desde componentes funcionales, entre muchas otras cosas. Nos permiten usar React sin clases.
    

### Estado en componentes clase

Para manejar el estado en componentes clase necesitamos crearlo como una propiedad dentro de nuestro componente clase, usamos this.state, y para actualizar el estado, la clase de React ya tiene un setter: this.setState. (Dentro de este tipo de componentes no se pueden usar los hooks)

```jsx
class Component extends React.Component {
    constructor(){
        this.state = {
            patito: '👍'
        }
    }
    
    render(){
        return (
            <button onClick={()=>this.setState("Has dado un like")}>{this.state.patito}</button>
        )
    }
}
```

### Estado en componentes funcionales

El manejo del estado en estos componentes es mucho más sencillo, utilizando el hook de estado. (Comienzan por “use”)
Podemos importar este hook directamente de React o desestructurándolo de React:

```jsx
import React from 'react';

function Component() {
    const [count, setCount] = React.useState("");
}
```

```jsx
import { useState } from 'react';

function Component() {
    const [count, setCount] = useState("");
}
```

Ejemplo

```jsx
function TodoSearch() {
    /* se va re renderizar nuestro componenete */
    const [patito, setPatito] = React.useState('Guada');
    const onSearchValue = (event) => {
        console.log(event.target.value)
    }
    return [
        <input className='TodoSearch' placeholder="Buscar Tarea" 
        onChange={ () => setPatito('nuevo nombre') }
        />,
        <p>{ patito }</p>
    ]
}
// cuando escribimos en el input cambia el nombre
```

Una vez lo importamos ya podemos usarlo en nuestro componente, este hook nos regresará un array con dos elementos:

- El **valor** de nuestro estado (Getter).
- La **función** que se ocupa de actualizar nuestro estado (Setter).

En useState es siempre necesario definir un valor como parametro. Puede ser un string, array, booleano o número

```jsx
function TodoSearch() {
    /* actualizamos con lo que escribe el user*/
    const [search, setSearch] = React.useState('');
    const onSearchValue = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <input className='TodoSearch' 
        placeholder="Buscar Tarea" 
        value={ search }
        onChange={ onSearchValue }
        />
    )
}
```

### Tipos de componentes

- **Stateful**: son componentes que tienen declaración de estado en su función.
- **Stateless**: son componentes que no tienen ningún tipo de estado declarado en el cuerpo de la función.

## Contando y buscando TODOs

El **levantamiento de estado** es una técnica de React que pone el estado en una localización donde se pueda pasar como props a los componentes.

Lo ideal es **poner el estado en el lugar más cercano a todos los componentes** que quieren compartir esa información, así todos nuestros componentes tendrán el mismo estado y cuando este cambie sólo re-renderizará lo necesario.

Esto es justamente lo que haremos ahora para hacer funcionar nuestro contador y nuestro buscador, pero debemos tener mucho **cuidado** al manejar re-renderizados, porque estos pueden causar una mala experiencia de usuario o incluso romper nuestra aplicación.

```jsx
function TodoCounter({total, completed }) {
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs 💪</h2>
    )
}

//App.js

function App() {
  /* los todos van a cambiar */
  const [todos, setTodos] = React.useState(defaultTodos); 
  const [search, setSearch] = React.useState(''); 

  const completedTodos = todos.filter( todo => !! todo.completed).length
  const totalTodos = todos.length
	
// este buscador es una maravilla y super sencillo :)
  let searchedTodos = []
  if (!search.length >= 1) {
    searchedTodos = todos
  }
  else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = search.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  }

  return (
    <>
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}

    />
    <TodoSearch
      search={ search }
      setSearch={ setSearch }
    />
    <TodoList>
      { searchedTodos.map( todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
      ))}
    </TodoList>
    <CreateTodoButton />
    </>
  );
}
```

## Completando y eliminando TODOs

Para tildar tarea como realizada o destildarla

```jsx
//App.js
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos]
    /* todos[todoIndex] = {
      text:todos[todoIndex].text,
      completed: true
    } 
	Esto lo mismo que está abajo. Lo hacemos en la misma línea
	En lugar de cambiar a true lo cambiamos por distinto a lo que estaba, 
entonces si estaba tildada se destilda y a la inversa 
Esto es util si el usuario marca sin querer una tarea que todavía no completó*/
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
  }
// en todoItem
onClick={ props.onComplete }>
```

Para eliminar un todo usaremos split

```jsx
const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos]
    /* desde donde, cuantos elimino */
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

//en todoItem
onClick={ props.onDeleted }>
```

# Fundamentos de React: escalabilidad

## Organización de archivos y carpetas

No existe una mejor estructura de carpetas, existen varias estructuras, y la más utilizada es la agrupación por tipo de archivo, puedes usar la que más te guste, la que mejor se adapte a tu proyecto, o ¡incluso crear una propia!

Puede ser una css, components y js

O una carpeta por componente

### Agrupación por tipo de archivo

En esta estructura solo agrupamos los archivos similares, es la más recomendada para proyectos grandes, también sirve para tener una excelente organización en proyectos pequeños, por ejemplo:

```bash
└── src/
    ├── assets/
    │   ├── img/
    │       └── foto.jpg
    │   ├── fonts/
    │       └──ubuntu.woff2
    ├── components/
    │   ├── CreateTodoButton/
    │       ├── index.js
    │       └── CreateTodoButton.css
    │   ├── TodoCounter/
    │   ├── TodoItem/
    │   ├── TodoList/
    │   ├── TodoSearch/
    ├── context/
    │   ├── TodoContext.js
    ├── hooks/
    │   ├── useLocalStorage.js
    ├── utils/
    │   ├── fetch.js
```

- **Stateful y Statless components**
    - Los componentes **stateful** son los componentes que guardan y manejan estados. Usa el hook useState() eso implica que él tiene que encargarse de manejar una variable que dispara un cambio en lo que muestra en la interfaz. 
    Un ejemplo común: un contador que aumenta cuando el usuario hace click sobre el.
    - Mientras los componentes **stateless** son los componentes que solo presentan información. Es decir, son los componentes que reciben props o simplemente muestran algún contenido
    No usa el hook useState() eso implica que muestran algo que les llega externamete y esa es la palabra clave. No se encargan de lidiar con variables que puedan cambiar la interfaz. Otro componente externo se encargará de ello.
    Un ejemplo: los comentarios de Platzi, tú escribes en un lugar y los comentarios con formato se visualizan en otro, en el primer lugar tienes variables useState() que guardan lo que escribes y en el segundo únicamente tienes un componente que presenta lo que se escribe.

En la carpeta App dejamos index.js con la lógica (Stateful) y creamos AppUI con lo demás. 
Luego veremos como manejar los props para no pasar tantos

- Archivos
    
    ```jsx
    //index.js de App
    import React from 'react';
    
    import { AppUI } from "./AppUI";
    
    //aca tenemos la lógica de la aplicación
    
    const defaultTodos = [
      { text:'Crear tu lista de Tareas', completed: true },
      { text:'Tomar Agua', completed: false },
      { text:'Hacer ejercicio', completed: false },
    ];
    
    function App() {
      /* los todos van a cambiar */
      const [todos, setTodos] = React.useState(defaultTodos); 
      const [search, setSearch] = React.useState(''); 
    
      const completedTodos = todos.filter( todo => todo.completed).length
      const totalTodos = todos.length
    
      let searchedTodos = []
      if (!search.length >= 1) {
        searchedTodos = todos
      }
      else {
        searchedTodos = todos.filter( todo => {
          const todoText = todo.text.toLocaleLowerCase()
          const searchText = search.toLocaleLowerCase()
          return todoText.includes(searchText)
        })
      }
    
      
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text )
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos)
      }
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text )
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos)
      }
    
      return (
        <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        search={ search }
        setSearch={ setSearch }
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        />
      );
    }
    
    export default App;
    ```
    
    ```jsx
    //AppUI
    
    import React from 'react'
    import { TodoCounter } from "../components/TodoCounter";
    import { TodoSearch } from "../components/TodoSearch";
    import { TodoList } from "../components/TodoList";
    import { TodoItem } from "../components/TodoItem";
    import { CreateTodoButton } from "../components/CreateTodoButton";
    
    import './App.css'
    
    function AppUI({
        totalTodos,
        completedTodos,
        search,
        setSearch,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }) {
        return (
            <>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
    
            />
            <TodoSearch
                search={ search }
                setSearch={ setSearch }
            />
            <TodoList>
                { searchedTodos.map( todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDeleted={()=>deleteTodo(todo.text)}
    
                />
                ))}
            </TodoList>
            <CreateTodoButton />
            </>
        )
    }
    
    export {AppUI}
    ```
    

## Persistencia de datos con Local Storage

Las aplicaciones web tienen tanto front-end como back-end, en front-end se encarga de la parte visual e interactuar con los usuarios, así como de conectarse con el back-end, en donde se maneja la autenticación, el almacenamiento de datos en bases de datos, esta es una manera muy utilizada para la persistencia de datos.

También es posible la persistencia de datos sin necesidad del back-end, utilizando la API de almacenamiento web, el **localStorage**, que nos permite almacenar datos localmente en el navegador, que persistirán incluso si el usuario recarga la página o cierra el navegador.

Además, existe otra forma de almacenar datos, aunque no es persistente, se llama **sessionStorage**, se utiliza exactamente igual que localStorage, la diferencia es que los datos en localStorage son persistentes. Guarda la información en memoria mientras dure la sesión de la página.

### Local Storage

Nos permite guardar datos persistentes en el navegador del usuario, que podremos acceder, modificar y hasta eliminar, para esto localStorage tiene varios métodos.

- Guardar datos: setItem(nombre, dato)
- Acceder a datos: getItem(nombre)
- Borrar un dato: removeItem(nombre)
- Eliminar todos los datos: clear(nombre)

Es muy importante saber que localStorage solamente puede guardar texto, no objetos, arreglos, números, solo strings para esto podemos utilizar unos métodos de JSON:

- Convertir a texto: JSON.stringify()
- Convertir a JavaScript: JSON.parse()

```jsx
function App() {
  // persistencia en memoria
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  /* los todos van a cambiar */
  const [todos, setTodos] = React.useState(parsedTodos); 
  const [search, setSearch] = React.useState(''); 

  const completedTodos = todos.filter( todo => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  if (!search.length >= 1) {
    searchedTodos = todos
  }
  else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = search.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  }

  const saveTodos = (newTodos)=>{
    const stringTodo = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringTodo)
    setTodos(newTodos)
  }

  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
```

## Custom Hook para Local Storage

Algo super interesante de React es que podemos crear hooks personalizados para ejecutar procesos para manejar información sin que afecte a otros componentes, lo que haremos será abstraer nuestra lógica de localStorage para manejarla dentro de nuestro propio hook.

**Reglas para crear un custom hook:**

1. Nuestro hook personalizado debe empezar por **use**, por ejemplo: *usePatito*, *useTodos* o *useUnicornio*.
2. **No anidar hooks** en loops u otros bloques.
3. Llamar dentro de componentes de React o hooks propios, nunca dentro de funciones normales.

### Creando nuestro Custom Hook

El objetivo de un custom hook es **reutilizar código**, entonces este hook debería poder funcionar para guardar cualquier tipo de dato en el localStorage.

Primero necesitamos analizar que **parámetros** necesita tener nuestro custom hook:

1. Un nombre para el item en nuestro localStorage.
2. Un estado inicial

También tenemos que regresar algunos datos para que nuestro hook sea funcional:

1. Los datos actuales de nuestro ítem en el localStorage.
2. Una función para actualizar los datos de este ítem.

```jsx
//Carpeta hook arhcivo useLocalStorage
import { useState } from 'react'

function useLocalStorage(itemName, initialValue ) {
    
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem)=>{
        const stringTodo = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringTodo)
        setItem(newItem)
    }

    return [item, saveItem]
}

export {useLocalStorage}

//en index.js de App
// importamos

//usamos dentro de app
//acá podemos llamarlo como queremos
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

//resto del código queda igual
```

## Manejo de efectos

El hook de efecto en react nos permite ejecutar un pedazo de código cada vez que necesitemos, a lo largo de la vida de nuestro componente, también cuando se cumplan ciertas condiciones.

Algo curioso e importante de saber es que el código dentro de nuestro hook de efecto no se ejecuta como el resto del código, se ejecutará inicialmente justo antes de hacer el renderizado del HTML que resulte de nuestro código de React.

<aside>
💡 **useEffect** ejecuta el código que le enviemos dentro justo antes de renderizar el componente. Cuando React ya tiene todo preparado para renderizar

</aside>

Para entenderlo

```jsx
console.log('antes');
  React.useEffect(()=>{
    console.log('aca use effect')
  }, [])
  console.log('despues');
```

![Untitled](TodoApp%20React%20js%20534285bcbc3c4c0b92db602e051818d4/Untitled%204.png)

### Condiciones para nuestro hook de efecto

El hook de React, `useEffect`, puede recibir dos argumentos:

1. Función que se ejecutará en cada fase del ciclo de vida de nuestro componente.
2. Las condiciones de cuándo debe ejecutarse esta función dentro de un arreglo, cada que se actualice cualquier dato que le pasemos a este arreglo, se volverá a ejecutar nuestra función.

```
React.useEffect(funcion, [dato1, dato2, datoN])

```

### Diferentes maneras de actualizar nuestros componentes

Existen tres diferentes maneras para aplicar el hook de efecto, todas funcionan diferente a la hora de re-renderizar nuestros componentes.

1. **Sin pasar un arreglo como segundo argumento: `useEffect(funcion)`**Cuando no le pasamos un segundo argumento con las condiciones de cuándo se debe re-ejecutar nuestra función, React tomará como condiciones que se debe ejecutar nuestra función todas las veces que ocurra un re-renderizado, y también cada vez que se actualice alguna **prop** (Si es que el componente recibe alguna).
2. **Pasando un arreglo vacío: `useEffect(funcion, [])`**Cuando pasamos un arreglo vacío, le estás diciendo a React que no hay ninguna condición para volver a ejecutar el código de nuestra función, entonces solamente se ejecutará en el renderizado inicial.
3. **Pasando un arreglo con datos: `useEffect(funcion, [val1, val2, valN])`**Cuando especificas las condiciones dentro del arreglo del segundo parámetro, le estás diciendo a React que ejecute nuestra función en el renderizado inicial y también cuando algún dato del arreglo cambie.

### Simulando una petición a una API

Dentro de una aplicación web, al trabajar con APIs, existen muchos factores para determinar cuánto tardará en cargar nuestra aplicación, como la velocidad de nuestro internet, la distancia del servidor, etc.

Al trabajar con APIs también debemos tener en cuenta que puede tardar en cargar mucho nuestra aplicación, o incluso puede ocurrir algún error, todo esto lo debemos de manejar para mantener a nuestro usuario informado.

**El hook de efecto nos permite saber cuando ya renderizó nuestra aplicación, así podemos mostrar un mensaje de cargando o alguna animación en lo que se completa la petición,** también con JavaScript podemos manejar los errores con `try` y `catch`, y haciendo uso del hook de estado podemos guardar si está cargando o hubo algún error.

```jsx
//useLocalStorage
import { useEffect, useState } from 'react'

function useLocalStorage(itemName, initialValue ) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue);

    useEffect(()=>{
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }

                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }, 1000);
    }, [])

    const saveItem = (newItem)=>{
        try {
            const stringTodo = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringTodo)
            setItem(newItem)
        } catch (error) {
            setError(true)
        }
    }

    return {item, saveItem, loading, error}
}

export {useLocalStorage}
```

## React Context: estado compartido

Es una forma de **tener acceso a datos** a través del árbol de componentes **sin tener que pasar props manualmente** en cada nivel, usando datos globales.

Para esto tenemos un proveedor que envolverá a todos los componentes que serán los consumidores de nuestro contexto.

**Fases:**

1. **Crear** el contexto de nuestra aplicación
2. **Proveer** nuestro contexto con los datos que queremos globales.
3. **Consumir** los datos desde cualquier parte de nuestra aplicación.

<aside>
💡 Es importante crear el contexto con `createContext`, ya que este nos regresará dos componentes: proveedor y consumidor.

</aside>

Con esto evitas pasar props a todos los componentes. Puedes tener muchos componentes que consuman un solo contexto y también varios contextos.

Si el valor del contexto cambia, todos los componentes suscritos se re-renderizan y actualizarán su estado.

- **¿Qué propiedad debemos enviarle al Provider de un contexto en React para consumirlo desde su respectivo Consumer?**
    
    value
    

[Context - React](https://reactjs.org/docs/context.html)

## useContext

El hook de contexto nos ayuda a acceder a datos globales de nuestro contexto, desde cualquier componente hijo, sin tener que pasar estos datos por props componente por componente.

Tiene la misma funcionalidad que el consumer de nuestro contexto, pero useContext también tiene una manera más sencilla de utilizar y una sintaxis mucho más clara.

```jsx
import { Contexto } from './direccionContexto/'

const { value } = React.useContext(Contexto)
```

### ¿Cuándo se recomienda emplear React Context?

- Estado global
- Tema
- Configuración de la app
- Autenticación de usuario
- Configuración de usuario
- Lenguaje preferido
- Colección de servicios
- 

### Código de ejemplo hasta el momento

- **TodoContext**
    
    ```jsx
    import { createContext, useState } from "react";
    import { useLocalStorage } from "../hooks/useLocalStorage";
    
    /* const { Provider, Consumer } = createContext(); */
    const TodoContext = createContext()
    // tiene que envolver toda la app
    function TodoProvider(props) {
        const {
            item: todos,
            SaveItem: saveTodos,
            loading,
            error
        } = useLocalStorage('TODOS_V1', [])
        
        const [search, setSearch] = useState(''); 
        
        const completedTodos = todos.filter( todo => todo.completed).length
        const totalTodos = todos.length
        
        let searchedTodos = []
        if (!search.length >= 1) {
            searchedTodos = todos
        }
        else {
            searchedTodos = todos.filter( todo => {
            const todoText = todo.text.toLocaleLowerCase()
            const searchText = search.toLocaleLowerCase()
            return todoText.includes(searchText)
            })
        }
    
        const completeTodo = (text) => {
            const todoIndex = todos.findIndex( todo => todo.text === text )
            const newTodos = [...todos]
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
            saveTodos(newTodos)
        }
        
        const deleteTodo = (text) => {
            const todoIndex = todos.findIndex( todo => todo.text === text )
            const newTodos = [...todos]
            newTodos.splice(todoIndex, 1)
            saveTodos(newTodos)
        }
    
        return (
            <TodoContext.Provider value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                search,
                setSearch,
                searchedTodos,
                completeTodo,
                deleteTodo,
            }}>
                {props.children}
            </TodoContext.Provider>
        )
    }
    
    export { TodoContext, TodoProvider }
    ```
    
- **AppUI**
    
    ```jsx
    import { useContext} from "react";
    import { TodoContext } from "../TodoContext";
    import { TodoCounter } from "../components/TodoCounter";
    import { TodoSearch } from "../components/TodoSearch";
    import { TodoList } from "../components/TodoList";
    import { TodoItem } from "../components/TodoItem";
    import { CreateTodoButton } from "../components/CreateTodoButton";
    
    import './App.css';
    
    function AppUI() {
        const {
            error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo
        } = useContext(TodoContext)
        return (
            <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error  && <p>Hubo un error</p>}
                {loading  && <p>Estamos cargando</p>}
                { searchedTodos.map( todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={()=>completeTodo(todo.text)}
                    onDeleted={()=>deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            <CreateTodoButton />
            </>
        )
    }
    
    export {AppUI}
    ```
    
- **App index.js**
    
    ```jsx
    import { useContext} from "react";
    import { TodoContext } from "../TodoContext";
    import { TodoCounter } from "../components/TodoCounter";
    import { TodoSearch } from "../components/TodoSearch";
    import { TodoList } from "../components/TodoList";
    import { TodoItem } from "../components/TodoItem";
    import { CreateTodoButton } from "../components/CreateTodoButton";
    
    import './App.css';
    
    function AppUI() {
        const {
            error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo
        } = useContext(TodoContext)
        return (
            <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error  && <p>Hubo un error</p>}
                {loading  && <p>Estamos cargando</p>}
                { searchedTodos.map( todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={()=>completeTodo(todo.text)}
                    onDeleted={()=>deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            <CreateTodoButton />
            </>
        )
    }
    
    export {AppUI}
    ```
    
- **TodoCounter**
    
    ```jsx
    import { useContext } from 'react';
    import { TodoContext } from '../../TodoContext';
    import './Counter.css';
    
    function TodoCounter() {
        const {totalTodos, completedTodos, loading, searchedTodos } = useContext(TodoContext)
        if (!loading && !searchedTodos.length) {
            return (
                <h2 className='TodoCounter'>Crea tu primer TODO 💪</h2>
            )
        } else {
            return (
                <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs 💪</h2>
            )
        }
    }
    
    export { TodoCounter }
    ```
    

# Modales y formularios

## Portales: teletransportación de componentes

Los portales nos permiten **teletransportar componentes** a otro nodo de HTML, y seguir comunicándose con otros componentes como si estuviera en el mismo nodo.

![Untitled](TodoApp%20React%20js%20534285bcbc3c4c0b92db602e051818d4/Untitled%205.png)

Se emplean en ocasiones donde los estilos CSS restringen los elementos. Por ejemplo, problemas de apilamiento `z-index` y desbordamiento `overflow`.

**¿Para qué podemos usarlos?**

- Modales
- Tooltips
- Menús flotantes
- Widgets

### Nuestro Proyecto

Nuestro botón tiene que abrir un modal para crear nuevos TODOs

## Formulario para crear TODOs

Algo muy importante al crear formularios es tener en cuenta que React funciona un poco diferente al HTML, ya que en HTML conservan naturalmente algún estado interno.

En React nosotros podemos mutar el estado de nuestros componentes con el hook de estado, un componente controlado es simplemente un componente en el que sus valores son controlados por React.