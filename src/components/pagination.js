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
  console.log(`currentPage`, currentPage);

  return (
    <div>
      <Stack spacing={2}>
        <div className="">
          
        </div>
      </Stack>
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)" }}>
        <Pagination
          count={10}
          variant="dark "
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
          style={{
            color: "#ff0707",
            border: "1px solid rgb(255 0 0 / 50 %)",
            backgroundColor: "rgb(255 0 0 / 12 %)",
          }}
        />
      </div>
    </div>
  );
}