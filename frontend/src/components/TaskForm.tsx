import React from "react";

interface TaskFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  createTask: () => Promise<void>;
  error: string | null;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  createTask,
  error,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={createTask}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};
