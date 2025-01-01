import React, { useState } from "react";
import useTodo from "./TodoContext";
function TodoItem(props) {
    const [todo, setTodo] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const { editTodo, deleteTodo,
        completeTodo } = useTodo();

    const onEditTodo = () => {
        if (todo === "") return
        editTodo(props.todo.id, { ...props.todo.todo, todoMsg: todo })
    }

    const OnDeleteTodo = () => {
        console.log(props.todo.todoMsg);
        deleteTodo(props.todo.id);
    }
    const onCompleteTodo = () => {
        completeTodo(props.todo.id);
    }

    return (
        <div
            className={`flex ${props.todo.isCompleted ? "bg-yellow-100" : ""} border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                onChange={onCompleteTodo}
                onCheck={props.todo.isCompleted}

            />
            <input
                type="text"
                className={`border outline-none ${props.todo.isCompleted ? " line-through" : ""}   border-transparent w-full text-cyan-300 bg-transparent rounded-lg`}
                onChange={(e) => setTodo(e.target.value)}
                value={props.todo.todoMsg}
                readOnly={!isEditable}


            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm  border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={onEditTodo}
            >
            </button>
            {/* Delete Todo Button */}
            <button
                onClick={OnDeleteTodo}


                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
