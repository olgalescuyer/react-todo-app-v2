import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="todo-app">
      <Todo titre="React tuto" description="Lorem ipsum" />
      <Todo titre="React super tuto" description="Lorem ipsum lorem" />
      <Todo titre="React puper tuto" description="Bla" />
    </div>
  );
}

export default App;
