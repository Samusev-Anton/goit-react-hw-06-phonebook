// import Form from './Form/Form';
import Form2 from './Form/Form2';
import User from './User/User';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <div
      style={{
        width: '600px',
        padding: '20px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        border: '2px solid #082911',
        borderRadius: '4px',
        backgroundColor: '#ebdeec',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Form2 />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      {contacts && <User />}
      <Filter />
    </div>
  );
};
