import React from 'react';
import { AppUI } from './AppUI';
import './App.css';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
]; */

/* ================================= HOOK ===================================================== */

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // El elemento o "datos" a guardar le ponemos versión, 
        //  en caso de que cambie la escructura del objeto más adelante  
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // comprobación de una anterior existencia de datos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;

        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        // Ya terminó de cargar la aplicación, ya que todo funcionó 
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });

  // SAVE NEW TODOs ===========
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

/* ================================= APP ==================================== */
function App() {
    const
      { item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    // Cantidad total y TODOs completados ==================================
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    // Buscar - Filtar TODOs ===============================================
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
    }

    // Completar TODOs ===================================================
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
    // Borrar TODOs =======================================================
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

    return (
      <AppUI
        loading={loading}
        return={error}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );
}
export default App;
