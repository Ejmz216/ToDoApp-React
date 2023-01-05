import React from 'react';
import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

import './App.css';

/* ================================= APP ==================================== */
function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,

    // -- NEW - Composición de componentes ----
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,

  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchValue={searchValue}

          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={
            (searchValue) => <p><p className='initialText'>Hmmm...  </p> We couldn't find any matches for "<b>{searchValue}</b>".
              <p>Double check your search for any typos or spelling errors - or try a different search term.</p>
            </p>}
        >
          {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}
        />

      </TodoHeader>

      {/* </MainPage> */}
    </React.Fragment>
  );
}


export default App;
