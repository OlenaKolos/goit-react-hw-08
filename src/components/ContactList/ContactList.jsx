import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
