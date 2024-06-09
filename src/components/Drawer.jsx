import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const DrawerRight = ({ open, setOpen, Component, title }) => {
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Drawer
        size={700}
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4"
      >
        <div className="border-b-2 mb-2 flex items-center justify-between p-4">
          <Typography variant="h5">
            {title}
          </Typography>
          <IconButton
            variant="text"
            className="font-bold text-black"
            onClick={closeDrawer}
          >
            Back
          </IconButton>
        </div>
        <div>
          {Component && <Component />}
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerRight;
