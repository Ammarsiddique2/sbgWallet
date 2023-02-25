import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <a className="dropdown-item">
        {props.name}
      </a>
    </li>
  );
};

export default ListItem;
