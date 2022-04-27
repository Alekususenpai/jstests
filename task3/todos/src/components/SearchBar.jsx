import React from "react";

export default function SearchBar({ onSearchChange }) {
  return (
    <div>
      <input type="search" onChange={onSearchChange} />
    </div>
  );
}
