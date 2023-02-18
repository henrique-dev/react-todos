import styles from './NewTodo.module.css';
import { ChangeEvent, useContext, useRef, useState } from "react";
import { TodosContext } from '../store/todos-context';

export const NewTodo = () => {
  const todoContext = useContext(TodosContext);
  const todoDescriptionInputRef = useRef<HTMLInputElement>(null);
  const [description, setDescription] = useState('');

  const changeDescriptionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredDescription = todoDescriptionInputRef.current!.value;

    if (description.trim().length === 0) {
      return;
    }

    console.log(description);
    todoContext.addTodo(description);
    setDescription('');
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="description">Todo Description</label>
      <input value={description} onChange={changeDescriptionHandler} ref={todoDescriptionInputRef} type="text" id="description" />
      <button>Add Todo</button>
    </form>
  );
}
