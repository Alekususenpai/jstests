import React from "react";

export default function Dropdown({ handleValue }) {
  return (
    <div>
      <select onChange={handleValue}>
        <option value="all">Filter by status</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  );
}
