import React, { useState } from "react";

const UpdateItem = ({ updateId} ) => {
  console.log(updateId);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault()
    // updateId({name,email,phone});
  };
  return (
    <div>
      <h1>
          update page
      </h1>
      <form
      onSubmit={handelSubmit}
        style={{ display: "flex", flexDirection: "column", margin: "40px" }} >
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value) } />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value) } />
        <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value) }/>
        <button type="submit" className="btn">
          add
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
