import styles from "./addtodo.module.scss";
import AppButton from "../AppButton/AppButton";
import { useRef } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { globalContext } from "../../pages/index";

export default function AddToDo() {
    const {toDoList, setTodoList} = useContext(globalContext);

  const inputTodo = useRef();

  const handleAddButtonClick = () => {
    const newTodo = {
        id: nanoid(2),
        text: inputTodo.current.value
    }

    setTodoList([...toDoList, newTodo]);
  };

  return (
    <div>
      <input
        ref={inputTodo}
        className={styles.addToDo}
        type="text"
        placeholder="Inserisci qui"
      />
      <AppButton text="Add Todo" handleClick={handleAddButtonClick} />
    </div>
  );
}
