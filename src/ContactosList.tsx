function ContactList({ contacts, onDelete }: any) {
  return (
    <ul>
      {contacts.map((c: any) => (
        <li key={c.id}>
          {c.name} - {c.phone}
          <button onClick={() => onDelete(c.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
