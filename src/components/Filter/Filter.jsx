import React from 'react';
import { InputStyle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from './filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const input = useSelector(state => state.filter);
  // const contacts = useSelector(state => state.contacts);
  // console.log(input);

  const handleInputChange = event => {
    const inputData = event.currentTarget.value;
    dispatch(addFilter(inputData));
  };

  return (
    <InputStyle htmlFor="">
      Filter
      <input
        type="text"
        value={input}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
    </InputStyle>
  );
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleInputChange: propTypes.func.isRequired,
// };
