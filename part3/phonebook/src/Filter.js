import React from "react";

export default function Filter({ filterHandler, filter }) {
  return (
    <div>
      filter show with:
      <input type="text" onChange={filterHandler} value={filter} />
    </div>
  );
}
