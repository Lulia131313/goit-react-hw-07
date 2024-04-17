import { useDispatch, useSelector } from "react-redux";
import s from "./Cont.module.css";
import Contact from "./Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filterContacts = (contact) => {
    const { name, number } = contact;
    const searchText = filteredContacts.toLowerCase();
    return (
      name.toLowerCase().includes(searchText) ||
      number.toLowerCase().includes(searchText)
    );
  };

  const filteredData = contacts.filter(filterContacts);

  return (
    <ul className={s.contacts}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} item={contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
