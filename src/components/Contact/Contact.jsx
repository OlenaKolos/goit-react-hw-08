import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactCard}>
      <div className={css.contactData}>
        <div className={css.contactInfo}>
          <FaUser />
          <span className={css.contactValue}>{contact.name}</span>
        </div>
        <div className={css.contactInfo}>
          <FaPhone />
          <span className={css.contactValue}>{contact.number}</span>
        </div>
      </div>
      <button type="button" onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
