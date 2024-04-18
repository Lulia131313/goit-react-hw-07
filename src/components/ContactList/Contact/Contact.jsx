import { IoPerson } from "react-icons/io5";
import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ item, handleDeleteContacts }) => {
  const { id, name, number } = item;
  return (
    <li className={s.contact}>
      <div className={s.number}>
        <p>
          <IoPerson className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={s.icon} />
          {number}
        </p>
      </div>
      <button
        onClick={() => handleDeleteContacts(item.id)}
        className="btn border"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
