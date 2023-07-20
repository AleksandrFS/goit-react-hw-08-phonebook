import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

 const Contacts = () => {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
}
export default Contacts;