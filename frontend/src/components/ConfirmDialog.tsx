import { forwardRef, type ReactElement } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, 
         Button, Slide, type SlideProps} from "@mui/material"

interface ConfirmDialogProps {
    children: string;
    title: string;
    open: boolean;
    onClose: (event?: any) => void;
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children: ReactElement },
  ref: React.Ref<unknown>
) { return <Slide direction="up" ref={ref} {...props} />; });


const ConfirmDialog = ({children, title, open, onClose}: ConfirmDialogProps) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                   {children}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;