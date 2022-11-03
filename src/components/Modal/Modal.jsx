import React, { Component } from 'react';
import css from "./Modal.module.css";
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector("#modal-root")

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose()
      }
    })
  }
  render() {
    return createPortal(<div className={css.Overlay}>
      <div className={css.Modal}>{this.props.children}</div>
    </div>, modalRoot)
  }
}