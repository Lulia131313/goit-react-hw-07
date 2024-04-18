import { useDispatch, useSelector } from "react-redux";
import s from "./Cont.module.css";
import Contact from "./Contact/Contact";
import { selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { deleteContacts, fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const filteredData = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContacts = (id) => {
    dispatch(deleteContacts(id));
  };

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
