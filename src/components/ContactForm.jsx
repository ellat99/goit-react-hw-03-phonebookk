import React, { Component } from 'react';
import ConstactForm from './ContactForm.module.css';

class ContactForm extends Component {
  // setam starea initiala a componentei
  state = {
    name: '',
    number: '',
  };

  // handler - pt a actualiza "state" (pt a re-renderiza) cu
  // valorile introduse in campurile formularului
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // trimitere formular
  handleSubmit = event => {
    //   impiedicare reincarcare formular la trimiterea datelor
    event.preventDefault();

    //destructuram starea componentei pt a obține valorile curente
    // ale câmpurilor name și number
    const { name, number } = this.state;

    // adaugare contact
    this.props.onAddContact(name, number);

    // Resetare formularul după adăugarea contactului
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            title="Name may contain only letters, apostrophe, dash, and spaces."
            required
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
