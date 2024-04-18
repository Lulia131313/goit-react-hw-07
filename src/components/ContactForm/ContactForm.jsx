import s from "./Contact.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";
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

  const handleSubmit = (data, options) => {
    dispatch(addContacts(data));
    options.resetForm();
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
