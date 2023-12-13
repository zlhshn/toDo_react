import "./App.css";
import ToDoList from "./components/ToDoList";


function App() {
  return (
    <main className="container" >
      <div className="header">
        <h1>To-do List</h1>
      </div>
       <ToDoList/>
    </main>
  );
}

export default App;
