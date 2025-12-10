import React, { useState } from 'react';

export default function TodoInput({ addTodo }) {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text, priority);
        setText('');
        setPriority('medium');
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center gap-4 bg-gray-50 p-2 pr-3 rounded-xl border border-transparent focus-within:border-gray-200 focus-within:bg-white transition-all">
                <div className="pl-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new task"
                    className="flex-1 bg-transparent py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />

                <div className="flex items-center gap-2">
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="bg-white border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-600 rounded-lg px-3 py-1.5 focus:outline-none hover:bg-gray-50 cursor-pointer"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                    <button
                        type="submit"
                        disabled={!text.trim()}
                        className="bg-gray-900 text-white rounded-lg px-4 py-1.5 text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Enter
                    </button>
                </div>
            </div>
        </form>
    );
}
