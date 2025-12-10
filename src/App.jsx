import React, { useState, useMemo } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = useMemo(() => {
    return todos
      .filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
      })
      .filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'priority') {
          const priorityWeight = { high: 3, medium: 2, low: 1 };
          return priorityWeight[b.priority] - priorityWeight[a.priority];
        }
        return b.createdAt - a.createdAt;
      });
  }, [todos, filter, search, sortBy]);

  return (
    <div className="min-h-screen py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">Tasks</h1>
            <p className="text-gray-500 font-medium text-sm">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-mono font-medium text-gray-900">
              {todos.filter(t => !t.completed).length}
            </span>
            <span className="text-gray-400 text-sm ml-2 font-medium">pending</span>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8">
          <TodoInput addTodo={addTodo} />

          <div className="flex flex-col sm:flex-row gap-6 mb-8 mt-8 border-b border-gray-100 pb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Filter tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-0 pr-4 py-2 bg-transparent border-0 border-b border-gray-200 placeholder-gray-400 text-sm focus:ring-0 focus:border-gray-900 transition-colors"
              />
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex gap-4">
                {['all', 'active', 'completed'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`capitalize transition-colors hover:text-gray-900 ${filter === f ? 'text-gray-900 underline underline-offset-4 decoration-2' : ''
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="h-4 w-px bg-gray-200"></div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-gray-500 focus:ring-0 cursor-pointer hover:text-gray-900 p-0 text-sm font-medium"
              >
                <option value="date">Latest</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 min-h-[300px]">
            {filteredTodos.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-300 py-12">
                <p className="text-sm font-medium">No tasks found</p>
              </div>
            ) : (
              filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
