import { useState } from "react";
const UserProfile = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit">Save</button>
    </form>
  );
};
export default UserProfile;
