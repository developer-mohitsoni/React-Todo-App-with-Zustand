import { useState } from "react";

import { todoStore } from "./store/todoStore";

const App = () => {
  const [todo, setTodo] = useState("");

  // const addTodo = todoStore((state) => state.addTodo);

  // const todos = todoStore((state)=>state.todos)

  const { todos, addTodo, toggleTodo, deleteTodo } = todoStore();

  const randomId = (): number => {
    const min = 1000;
    const max = 9999;

    return Math.round(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = (event: React.FormEvent) => {
    // isse page refresh nai hoga
    event.preventDefault();

    if (todo.length > 0) {
      addTodo({
        id: randomId(),
        todo: todo,
        isDone: false,
      });

      setTodo("");
    }
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg bg-[#242424]">
          <h1 className="font-bold text-3xl">Todos</h1>
          <p>Add your daily task</p>

          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <input
                type="text"
                className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-red-400 border border-red-400"
                value={todo}
                placeholder="Enter you todo"
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </form>

          <div className="mt-5">
            {todos.length > 0 &&
              todos.map((item) => {
                return (
                  <div
                    className="w-full rounded-lg p-2 border border-blue-400 mb-2 flex justify-between items-center"
                    key={item.id}
                  >
                    <h1 className={`${item.isDone ? "line-through" : ""}`}>
                      {item.todo}
                    </h1>
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        onChange={(e) => toggleTodo(item.id, e.target.checked)}
                        checked={item.isDone}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash-2 text-green-400"
                        onClick={() => deleteTodo(item.id)}
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
