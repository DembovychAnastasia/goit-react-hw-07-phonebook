import { Label, Input } from './FilterContact.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contactSlice';



export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        // value={filter}
        // onChange={event => dispatch(setFilter(event.target.value.trim()))}
        onChange={event =>
          dispatch(filteredContacts(event.target.value.trim()))
        }
      />
    </Label>
  );
};