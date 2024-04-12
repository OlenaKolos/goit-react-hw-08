import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import { List } from "@mui/material";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    Array.isArray(contacts) && (
      <List
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "12px",
          mt: 2,
        }}
      >
        {contacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </List>
    )
  );
};

export default ContactList;
