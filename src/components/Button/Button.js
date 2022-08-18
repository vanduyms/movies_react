import React from 'react';
import "./Button.scss";

export const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button >
  )
};

export const ButtonOutline = (props) => {
  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button >
  )
};