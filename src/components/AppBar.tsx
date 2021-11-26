import * as React from "react";
import { AppBar as MuiAppBar, Box, Toolbar, Typography } from "@mui/material";

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
