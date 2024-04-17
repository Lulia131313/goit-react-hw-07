import s from "./Contact.module.css";
import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import toast from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const addContacts = (contact) => {
    const isExist = contacts.some(
      (item) => item.name === contact.name && item.number === contact.number
    );
    if (isExist) {
      return toast.error("This book already exists!");
    }
    dispatch(addContact(contact));
    toast.success("Book was added! 🔥");
  };

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    addContacts(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={s.form}>
          <div>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <Field className={s.input} type="text" name="name" id="name" />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>

          <div>
            <label className={s.label} htmlFor="number">
              Number
            </label>
            <Field className={s.input} type="text" name="number" id="number" />
            {errors.number && touched.number && <div>{errors.number}</div>}
          </div>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
