import React from 'react';
import './MainPage.css'

function MainPage(props) {
  return (
    <section className="MainPage">
       {props.children}      
    </section>
  );
}

export { MainPage };
