class Todo {
  id: string;
  description: string;

  constructor(description: string) {
    this.description = description;
    this.id = Math.random().toString()
  }
}

export default Todo;
