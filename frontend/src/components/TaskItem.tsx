import React, { useState } from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  updateTask: (id: number, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  editingTaskId: number | null;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  updateTask,
  deleteTask,
  editingTaskId,
  setEditingTaskId,
}) => {
  const [updateTitle, setUpdateTitle] = useState<string | undefined>(
    task.title
  );
  const [updateDescription, setUpdateDescription] = useState<
    string | undefined
  >(task.description);

  return (
    <li className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => updateTask(task.id, { completed: !task.completed })}
        className="h-5 w-5 text-blue-500"
      />
      {editingTaskId === task.id ? (
        <div className="flex-1 flex flex-col gap-2">
          <input
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                updateTask(task.id, {
                  title: updateTitle,
                  description: updateDescription,
                });
                setEditingTaskId(null);
              }}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setEditingTaskId(null)}
              className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-hidden">
          <div
            className={`font-semibold break-words ${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.title}
          </div>
          <div
            className={`text-sm break-words ${
              task.completed ? "line-through text-gray-500" : "text-gray-600"
            }`}
          >
            {task.description}
          </div>
        </div>
      )}
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
      <button
        onClick={() => setEditingTaskId(task.id)}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Edit
      </button>
    </li>
  );
};
