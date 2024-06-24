import styles from './todo.module.scss';
import { useContext, useState, useEffect } from 'react';
import { globalContext } from '../../pages/index';

export default function ToDo({ todo }) {
    const [isActive, setIsActive] = useState(false);
    const { setTodoList, toDoList} = useContext(globalContext);
    // const { id, text } = todo;

    // useEffect per aggiornare lo stato di isActive
    useEffect(() => {
        setIsActive(true);
    }, [])

    const handleDeleteClick = () => {
       setTodoList(
        toDoList.filter(item => item.id !== todo.id)
       )
    }

    return (
        <>
        {/* isActive - aggiungo la classe al mount e quindi ho l'animazione */}
        <div id={ todo.id } className={`${styles.todo} ${isActive && styles.active}`}>
            <p className={ styles.todoText }>{ todo.text }</p>
            <span onClick={handleDeleteClick} className={styles.close}>x</span>
        </div>
        </>
    )
}