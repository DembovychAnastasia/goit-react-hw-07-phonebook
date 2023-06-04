import { GlobalStyle } from "./GlobalStyle";
import { Section } from "./Section/Section";
import { Container } from "./Container";
import {ContactForm} from "./FormContact/FormContact";
import { ContactList } from "./ContactList/ContacttList";
import { Filter } from "./FilterContact/FilterContact";
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { selectError, selectIsLoading } from 'redux/selectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <GlobalStyle/>
      <Section title="Phonebook">  
      <ContactForm  />
      </Section>
      <Section title="Contacts">   
      <Filter/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
      <Toaster/>
        </Section> 
   
    </Container>
  );
}
