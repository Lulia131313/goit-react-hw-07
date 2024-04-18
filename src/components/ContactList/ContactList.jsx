import { useDispatch, useSelector } from "react-redux";
import s from "./Cont.module.css";
import Contact from "./Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { deleteContacts, fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContacts = (id) => {
    dispatch(deleteContacts(id));
  };

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

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
      {loading && <p>Loading...</p>}
      {filteredData.map((contact) => (
        <Contact
          key={contact.id}
          item={contact}
          handleDeleteContacts={handleDeleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;
