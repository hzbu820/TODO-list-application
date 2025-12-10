import React from 'react';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    const priorityStyles = {
        low: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        medium: 'bg-amber-50 text-amber-600 border-amber-100',
        high: 'bg-rose-50 text-rose-600 border-rose-100',
    };

    return (
        <div className="group flex items-start gap-4 py-3.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <label className="checkbox-wrapper relative flex items-center pt-1 cursor-pointer">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span className="checkmark"></span>
            </label>

            <div className="flex-1 min-w-0 flex flex-col justify-center">
                <p className={`text-base font-medium leading-snug transition-all duration-300 ${todo.completed ? 'text-gray-400 line-through decoration-gray-300 decoration-2' : 'text-gray-900'
                    }`}>
                    {todo.text}
                </p>
                <div className="flex items-center gap-2 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${priorityStyles[todo.priority]}`}>
                        {todo.priority}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                        {new Date(todo.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>

            <button
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                aria-label="Delete"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
            </button>
        </div>
    );
}
