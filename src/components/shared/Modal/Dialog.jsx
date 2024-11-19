import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PT from "prop-types";
import React from "react";

import Button from "@components/shared/Button/Button";

const Dialog = ({
  open,
  title,
  onClose,
  content,
  onConfirm,
  confirmText,
  confirmLoading,
  onCancel,
  cancelText,
  displayedConfirmBtn,
  displayedCancelBtn
}) => (
  <MuiDialog
    open={open}
    keepMounted
    onClose={onClose}
    aria-describedby="alert-dialog-slide-description"
  >
    {typeof title === "string" ? <DialogTitle>{title}</DialogTitle> : title}
    {content && (
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
    )}
    <DialogActions>
      {displayedCancelBtn && (
        <Button variant="outlined" onClick={onCancel || onClose}>
          {cancelText}
        </Button>
      )}
      {displayedConfirmBtn && (
        <Button loading={confirmLoading} onClick={onConfirm}>
          {confirmText}
        </Button>
      )}
    </DialogActions>
  </MuiDialog>
);

Dialog.defaultProps = {
  confirmText: "Yes",
  cancelText: "No",
  onConfirm: () => {},
  displayedCancelBtn: true,
  displayedConfirmBtn: true
};

Dialog.propTypes = {
  open: PT.bool,
  onClose: PT.func.isRequired,
  content: PT.oneOfType([PT.node, PT.string]),
  title: PT.node,
  onConfirm: PT.func,
  confirmText: PT.string,
  confirmLoading: PT.bool,
  onCancel: PT.func,
  cancelText: PT.string,
  displayedConfirmBtn: PT.bool,
  displayedCancelBtn: PT.bool
};

export default Dialog;
