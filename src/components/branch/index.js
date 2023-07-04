import React from "react";
import "./index.css";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { Container, Grid } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };






function Branch() {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    const columns = ["Name", "Phone", "State", "City", "Location", "Assigned Manager"];

    const data = [
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
      ["Joe James", "1234567890", "Tamil Nadu", "Madurai", "BB Kulam", "Raja"],
     
    ];

    const options = {
        filterType: "textField",     
        selectableRows: "none",   
        filter: true,
        download: true,
        print: true,
        search: true, 
        viewColumns: true,
        onChangePage (currentPage) {
          console.log({currentPage});
        },
        onChangeRowsPerPage (numberOfRows) {
          console.log({numberOfRows});
        }
      };

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <>
        <Container maxWidth="lg">
        <div className='align-right'>
        <Button variant="contained" onClick={handleClickOpen}>Add Branch</Button>
        </div>
        <div className="mb10" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>
        <Typography color="text.primary">BRANCH LIST</Typography>
      </Breadcrumbs>
    </div>
       
        <MUIDataTable
          title={"Branch List"}
          data={data}
          columns={columns}
          options={options}
        />


    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Branch
        </BootstrapDialogTitle>
        <DialogContent dividers>
          
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="name"
          label="Name"
          defaultValue=""
        />
        <TextField
          required
          id="phonenumber"
          label="Phone Number"
          type="number"
          defaultValue=""
        />
        <TextField
          required
          id="state"
          label="State"
          defaultValue=""
        />
        <TextField
          id="city"
          label="City"
          defaultValue=""
        />
        <TextField
          id="location"
          label="Location"
          defaultValue=""
        />
        <TextField
          id="manager"
          label="Assigned Manager"
          defaultValue=""
        />
      </div>
    </Box>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>


        </Container>
        </>
    );
}

export default Branch;