
import styles from './Todos.module.css';

import { TodoItem } from './TodoItem';
import { TodosContext } from '../store/todos-context';
import { useContext } from 'react';

const Todos = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosContext.items.map(item => (
        <TodoItem
          onRemove={todosContext.removeTodo.bind(null, item.id)}
          key={item.id}
          id={item.id}
          description={item.description} />
      ))}
    </ul>
  );
}

export default Todos;
