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
        {/* Any additional content you might want */}
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
          count={12}
          variant="dark"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
          style={{
            color: "white", // Set the color to white
            border: "1px solid rgba(255, 255, 255, 0.5)", // Adjust the border color
            backgroundColor: "grey", // Adjust the background color
          }}
        />
      </div>
    </div>
  );
}
