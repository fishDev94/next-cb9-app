import { useState, createContext } from "react";
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import ToDoList from "../components/ToDoList/ToDoList";
import AddToDo from "../components/AddToDo/AddToDo";

export const globalContext = createContext();

export default function Home() {
  const [toDoList, setTodoList] = useState([]);

  const value = {
    setTodoList,
    toDoList
  }

  return (
    <globalContext.Provider value={value}>
      <div>
        <Link href="/aboutus">About us</Link>
        <h1>Home Page</h1>
        <AddToDo />
        <ToDoList list={toDoList} />
      </div>
    </globalContext.Provider>
  );
}
