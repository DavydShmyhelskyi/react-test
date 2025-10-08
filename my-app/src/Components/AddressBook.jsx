import { useState } from "react";
import AddContactForm from "./AddContactForm";
import Contact from "./Contact";

export default function AddressBook() {
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const addContact = (contact) => {
    const newContact = { ...contact, id: Date.now() };
    setContacts([...contacts, newContact]);
  };

  const updateContact = (id, updatedData) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, ...updatedData } : c));
    setEditingId(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div>
        <h1>Address Book</h1>
      <AddContactForm onAdd={addContact} />

      <ul className="contacts-list">
  {contacts.length === 0 ? (
    <p className="no-data">No data to display.</p>
  ) : (
    contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        onDelete={deleteContact}
        onEdit={() => setEditingId(contact.id)}
        onSave={updateContact}
        isEditing={editingId === contact.id}
      />
    ))
  )}
</ul>

    </div>
  );
}
