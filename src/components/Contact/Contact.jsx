// import { PropTypes } from "prop-types";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsOps";
// import { FaUser, FaPhone } from "react-icons/fa";
// import css from "./Contact.module.css";

// const Contact = ({ contact }) => {
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(contact.id));

//   return (
//     <div className={css.contactCard}>
//       <div className={css.contactData}>
//         <div className={css.contactInfo}>
//           <FaUser />
//           <span className={css.contactValue}>{contact.name}</span>
//         </div>
//         <div className={css.contactInfo}>
//           <FaPhone />
//           <span className={css.contactValue}>{contact.number}</span>
//         </div>
//       </div>
//       <button type="button" onClick={() => handleDelete()}>
//         Delete
//       </button>
//     </div>
//   );
// };

// Contact.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

// export default Contact;

import { useState } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import DeleteContactDialog from "../DeleteContactDialog/DeleteContactDialog";
import EditContactDialog from "../EditContactDialog/EditContactDialog";
import toast from "react-hot-toast";
import {
  Button,
  ButtonGroup,
  ListItem,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const Contact = ({ contact }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("Contact deleted from phonebook!");
  };

  return (
    <ListItem sx={{ width: "270px", padding: 0 }}>
      <Card sx={{ width: "270px" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            padding: "16px",
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                lineHeight: 1,
                mb: 2,
              }}
            >
              <PersonIcon />
              {contact.name}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <PhoneIcon />
              {contact.number}
            </Typography>
          </Box>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            <Button type="button" onClick={handleClickOpenEditDialog}>
              Edit
            </Button>
            <Button type="button" onClick={handleClickOpenDialog}>
              Delete
            </Button>
          </ButtonGroup>
          <DeleteContactDialog
            open={open}
            id={contact.id}
            handleClose={handleCloseDialog}
            handleDelete={handleDelete}
          />
          <EditContactDialog
            open={openEdit}
            contact={contact}
            handleClose={handleCloseEditDialog}
          />
        </CardContent>
      </Card>
    </ListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
