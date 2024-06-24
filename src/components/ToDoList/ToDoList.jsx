import styles from './todolist.module.scss'
import ToDo from "../ToDo/ToDo";

export default function ToDoList({ list }) {
  return (
    <div className={ styles.todoList }>
      {list.map((todo, index) => (
        <ToDo key={ index } todo={todo} />
      ))}
    </div>
  );
}
