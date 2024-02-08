import React from "react";
import { Dropdown } from "react-bootstrap";

const MenuItem = (props) => {
  const onSelect = (event) => {
    if (typeof props.onSelect === "function") {
      props.onSelect(event);
    }
  };

  return (
    <Dropdown.Item
      id={props.id}
      href={props.href}
      title={props.title}
      className={props.className}
      onSelect={onSelect}
      active={props.active}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Dropdown.Item>
  );
};

export default MenuItem;
