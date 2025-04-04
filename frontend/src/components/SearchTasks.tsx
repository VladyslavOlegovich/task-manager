import React from "react";

interface SearchTasksProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchTasks: React.FC<SearchTasksProps> = ({
  search,
  setSearch,
}) => {
  return (
    <div className="mb-4">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
