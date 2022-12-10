import React from "react";
/* import { MainPage } from './MainPage'; */
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,

    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            {/* <MainPage> */}

            {/* <div className='leftPannel'></div> */}
            <TodoHeader>

                <TodoSearch />
                <TodoCounter />
                {/* Podemos acceder a nuestro contexto con el consumer */}

                <TodoList>
                    {/*Mostramos un mensaje en caso de que ocurra algún error*/}
                    {error && <p>There was an error...</p>}
                    {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
                    {loading && <p>Loading, don't desperate...</p>}
                    {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
                    {(!loading && !searchedTodos.length && !error) && <p>Create your first TODO!</p>}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={(() => completeTodo(todo.text))}
                            onDelete={(() => deleteTodo(todo.text))}
                        />
                    ))}
                </TodoList>

                <CreateTodoButton />
            </TodoHeader>

            {/* </MainPage> */}
        </React.Fragment>
    );
}

export { AppUI };