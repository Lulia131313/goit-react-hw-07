import { IoPerson } from "react-icons/io5";
import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li className={s.contact}>
      <div>
        <p>
          <IoPerson className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};

export default Contact;
