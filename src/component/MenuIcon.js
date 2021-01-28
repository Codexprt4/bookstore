import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function MenuIcon() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            Manage
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Link to="/manage-category">
              <MenuItem onClick={popupState.close}>Manage Category</MenuItem>
            </Link>
            <Link to="/manage-book">
              <MenuItem onClick={popupState.close}>Manage Books</MenuItem>
            </Link>
            <Link to="/manage-author">
              <MenuItem onClick={popupState.close}>Manage Author</MenuItem>
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuIcon;
