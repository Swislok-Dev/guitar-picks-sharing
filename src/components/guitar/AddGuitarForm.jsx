import React from 'react';

function AddGuitarForm(props) {
  const [inputs, setInputs] = React.useState({});

  const handleChange = (e) => {
    setInputs((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({});
    e.target.reset();
    props.onClose();
  };

  return (
    <form onSubmit={handleSubmit} id="guitar-form">
      <div className="form-control">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="brand"
          id="brand"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="model"
          id="model"
          required
        />
      </div>
      <fieldset id="style" htmlFor="style" required>
        Choose the style of guitar
        <div className="buttons">
          <input
            type="radio"
            value="Electric"
            name="style"
            id="style1"
            onChange={handleChange}
            required
          />
          <label htmlFor="style1">Electric</label>
        </div>
        <div className="buttons">
          <input
            type="radio"
            value="Acoustic"
            name="style"
            id="style2"
            onChange={handleChange}
          />
          <label htmlFor="style2">Acoustic</label>
        </div>
        <div className="buttons">
          <input
            type="radio"
            value="Acoutic-Electric"
            name="style"
            id="style3"
            onChange={handleChange}
          />
          <label htmlFor="style3">Acoustic-Electric</label>
        </div>
      </fieldset>

      <div className="form-control">
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="url" name="imageUrl" id="imageUrl" required />
      </div>

      <input className="submit" type="submit" value="Add" />
    </form>
  );
}

export default AddGuitarForm;
