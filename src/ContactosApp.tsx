import { useEffect, useState } from 'react';
import Loader from './Cargador';
import ContactForm from './ContactosForm';
import ContactList from './ContactosList';

function ContactsApp() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setContacts([
        { id: 1, name: 'Juan', phone: '3001234567' },
        { id: 2, name: 'Maria', phone: '3109876543' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const addContact = (contact: any) => {
    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = (id: number) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="img-container">
        <img src="/contacto.png" alt="Contactos" />
      </div>

      <h2>Lista de Contactos</h2>

      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </>
  );
}

export default ContactsApp;
