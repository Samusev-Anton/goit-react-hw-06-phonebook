import React from 'react';
import propTypes from 'prop-types';
import { UserList, UserName } from './User.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'components/Form/formSlice';

const User = () => {
  const contacts = useSelector(state => state.contacts);
  const input = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );
  console.log(filteredContacts);

  return (
    <UserList>
      {filteredContacts.map(({ name, number, id }) => (
        <UserName key={id}>
          <span>
            {name}:{number}
          </span>
          <button type="button" onClick={() => dispatch(removeContact(id))}>
            Delete
          </button>
        </UserName>
      ))}
    </UserList>
  );
};

export default User;

User.propTypes = {
  filter: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
