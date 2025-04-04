import React from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "../types/Task";

interface TaskListProps {
  filteredTasks: Task[];
  updateTask: (id: number, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  editingTaskId: number | null;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Tasklist: React.FC<TaskListProps> = ({
  filteredTasks,
  updateTask,
  deleteTask,
  editingTaskId,
  setEditingTaskId,
}) => {
  return (
    <ul className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          editingTaskId={editingTaskId}
          setEditingTaskId={setEditingTaskId}
        />
      ))}
    </ul>
  );
};
