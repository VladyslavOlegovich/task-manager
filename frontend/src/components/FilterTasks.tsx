import React from "react";

interface FilterTasksProps {
  setFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const FilterTasks: React.FC<FilterTasksProps> = ({ setFilter }) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setFilter(undefined)}
        className="bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300 transition"
      >
        All
      </button>
      <button
        onClick={() => setFilter("true")}
        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("false")}
        className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition"
      >
        Pending
      </button>
    </div>
  );
};
