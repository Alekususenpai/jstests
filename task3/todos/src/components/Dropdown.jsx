import React from "react";

export default function Dropdown({ handleValue }) {
  return (
    <div style={{ textAlign: "center" }}>
      <select onChange={handleValue}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  );
}
