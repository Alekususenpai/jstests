import React from "react";

export default function SearchBar({ onSearchChange, placeholder }) {
  return (
    <div style={{ textAlign: "center" }}>
      <input
        style={{ padding: "0.3em 1.5em", margin: "1em", borderRadius: "0.5em" }}
        type="search"
        onChange={onSearchChange}
        placeholder={placeholder}
      />
    </div>
  );
}
