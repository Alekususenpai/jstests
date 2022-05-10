import React from "react";

export default function Dropdown({ handleValue, selectedValue }) {
  return (
    <div style={{ textAlign: "center" }}>
      <select onChange={handleValue} defaultValue={selectedValue}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  );
}
