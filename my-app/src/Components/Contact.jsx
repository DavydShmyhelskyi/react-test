import { useState } from "react";

export default function Contact({ contact, onDelete, onEdit, onSave, isEditing }) {
  const [form, setForm] = useState(contact);

  const handleSave = () => {
    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim()) {
      alert("Fields cannot be empty");
      return;
    }
    onSave(contact.id, form);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <input
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{contact.firstName} {contact.lastName} — {contact.phone}</span>
          <button onClick={onEdit}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
