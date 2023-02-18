import React from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  id: string;
  description: string;
  onRemove: () => void
}

export const TodoItem = (props: TodoItemProps) => {
  const clickHandler = (event: React.MouseEvent) => {
    props.onRemove();
  };

  return (
    <li onClick={clickHandler} className={styles.item}>{props.description}</li>
  );
}
