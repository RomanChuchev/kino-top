import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";

const MainLayout = () => {
  return (
    <>
      {/* loading */}
      <GlobalLoading />
      {/* loading */}
      <Box display="flex" minHeight="100ch">
        {/* header */}
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      {/* footer */}
      {/* footer */}
    </>
  );
};

export default MainLayout;
