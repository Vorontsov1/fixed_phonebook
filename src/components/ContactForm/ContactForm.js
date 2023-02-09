
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/contactsslice';
import { getContacts } from 'redux/contacts/selectors';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  
    const dispatch = useDispatch()

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { name, number } = e.target;
        const resultName = name.value.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

        const newContact = {
        id: nanoid(),
        name: resultName,
        number: number.value
        };
    
    const getAllContactsNames = contacts.map(cont => cont.name);
        if (getAllContactsNames.includes(resultName)) {
            form.reset();
            return alert(`${resultName} is already in contacts`);
            } else {
            dispatch(addContacts(newContact));
            form.reset();
        }
    }

  return (
    <form className={s.form} onSubmit={formSubmitHandle}>
      <label className={s.label}
        htmlFor={nameInputId}>
        Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

          required
        />
      
      <label className={s.label}
        htmlFor={numberInputId}>
        Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}