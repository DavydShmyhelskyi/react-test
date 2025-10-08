import { useState } from "react";

export default function AddContactForm({ onAdd }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "The first name is required";
    if (!form.lastName.trim()) newErrors.lastName = "The last name is required";
    if (!form.phone.trim()) newErrors.phone = "The phone is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd(form);
    setForm({ firstName: "", lastName: "", phone: "" });
    setErrors({});
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <input
        type="text"
        placeholder="Last name"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <button type="submit">Add</button>
    </form>
  );
}
