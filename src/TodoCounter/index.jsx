import React from 'react';
import './TodoCounter.css';
// Style___________________________________________________________________
var today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const currentTime = today.getHours();
let greeting;
if (currentTime < 12) {
  greeting = "Good Morning";

} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}
var now = today.toLocaleDateString('en-BR', options);
//_________________________________________________________________________

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <>
      <h1>{greeting}!</h1>
      <h2>{now}</h2>
      <h2 
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        You have completed {completedTodos} out of {totalTodos} <b className='todoTitle'>ToDOs</b>
      </h2>
    </>
  );
}

export { TodoCounter };
