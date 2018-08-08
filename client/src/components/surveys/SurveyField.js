//field contains logic to render a single laben and text input
import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label style={{ color: '#FF8000' }}>{label} </label>
      <input {...input} style={{ marginBottom: '5px', color: 'white' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
