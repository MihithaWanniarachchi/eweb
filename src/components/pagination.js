import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function PaginationRounded({ setPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };

  return (
    <div>
      <Stack spacing={2}>
       
      </Stack>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Pagination
          count={10}
          variant="light"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
          style={{
            color: "#333",            // Dark text color
    backgroundColor: "#fff",  // Light background color
    border: "1px solid #ddd", 
          }}
        />
      </div>
    </div>
  );
}
