import { useDispatch, useSelector } from 'react-redux';
import { Btn, Item, List } from './ContactList.styled'
import { RiDeleteBin6Line } from 'react-icons/ri';
import {deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
    
return (
  
        <List>
          {contacts.map(({ id, name, number }) => {
             return (
            <Item key={id}>
              
                <p>{name}: </p>
                <p>{number}</p>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              <RiDeleteBin6Line size="16" />
              </Btn>
            </Item>
             )
          })}
          
        </List>
      );
};  