// import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/selectors";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// const ContactList = () => {
//   const contacts = useSelector(selectFilteredContacts);

//   return (
//     <ul className={css.contactList}>
//       {contacts.map((contact) => {
//         return <Contact key={contact.id} contact={contact} />;
//       })}
//     </ul>
//   );
// };

// export default ContactList;

import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { List } from "@mui/material";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

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