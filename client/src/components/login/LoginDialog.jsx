import { Dialog } from '@mui/material';


const LoginDialog = ({open, setOpen}) => {

    // to close the login dialog on clicking outside the login dialog
    const handleClose = () =>{
        setOpen(false);
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            Hello
        </Dialog>
    )
}

export default LoginDialog;