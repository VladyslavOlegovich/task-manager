import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tasklist } from "./components/Tasklist";
import { FilterTasks } from "./components/FilterTasks";
import { SearchTasks } from "./components/SearchTasks";
import { Task } from "./types/Task";
import { TaskForm } from "./components/TaskForm";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const url = "http://localhost:3000/tasks";

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const fetchTasks = async () => {
    const response = await axios.get(url, { params: { completed: filter } });
    setTasks(response.data);
  };

  const createTask = async () => {
    if (!title.trim() || !description.trim()) {
      setError("Both title and description are required!");
      return;
    }
    setError(null);
    await axios.post(url, {
      title,
      description,
      completed: false,
    });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const updateTask = async (id: number, updates: Partial<Task>) => {
    await axios.put(`${url}/${id}`, updates);
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`${url}/${id}`);
    fetchTasks();
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Task Manager
      </h1>
      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        createTask={createTask}
        error={error}
      />
      <FilterTasks setFilter={setFilter} />
      <SearchTasks search={search} setSearch={setSearch} />
      <Tasklist
        filteredTasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
      />
    </div>
  );
};

export default App;
