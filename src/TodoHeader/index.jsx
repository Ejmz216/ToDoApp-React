import React from 'react';
import './TodoHeader.css'

function TodoHeader(props) {
  return (
    <section className="TodoHeader">
      {props.children}
    </section>
  );
}

export { TodoHeader };
