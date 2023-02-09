import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';





// export default function App() {
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//         <ContactList />
//     </div>
//   );
// };

const styles = {
container: {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
header: {
fontSize: '36px',
fontWeight: 'bold',
margin: '30px 0',
},
};

export default function App() {
return (
<div style={styles.container}>
<h1 style={styles.header}>Phonebook</h1>
<ContactForm />
<h2>Contacts</h2>
<Filter />
<ContactList />
</div>
);
};