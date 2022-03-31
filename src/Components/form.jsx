import React, { useState } from 'react';

const Form = ({ addItem }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const addInput = (e) => {
		e.preventDefault();
		addItem({ name, email, phone });
	};
	return (
		<div>
			<form onSubmit={addInput} style={{ display: 'flex', flexDirection: 'column', margin: '40px' }}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
				<button type="submit" className="btn">
					add
				</button>
			</form>
		</div>
	);
};

export default Form;
