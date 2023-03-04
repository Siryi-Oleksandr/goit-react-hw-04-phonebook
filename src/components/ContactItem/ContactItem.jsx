import { Component } from 'react';
import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';

import {
  Item,
  ContactTel,
  ContactName,
  ContactInfo,
} from 'components/ContactItem/ContactItem.styled';
import { Controls, ControlsSave } from 'components/Control/Controls';
import EditForm from 'components/EditForm';

class ContactItem extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
    isEdit: false,
  };

  handleEditContact = (name, number) => {
    if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    } else {
      this.setState({
        name: name ? name : this.props.name,
        number: number ? number : this.props.number,
        isEdit: false,
      });

      this.props.onEditContact({
        id: this.props.id,
        name: name ? name : this.state.name,
        number: number ? number : this.state.number,
      });
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, onDeleteContact } = this.props;
    const { isEdit, name, number } = this.state;
    return (
      <Item>
        {/* if contact saved show contact info */}

        {!isEdit && (
          <ContactInfo>
            <ContactName>
              <HiUser />
              {name}:
            </ContactName>

            <ContactTel>
              <ImPhone />
              {number}
            </ContactTel>
          </ContactInfo>
        )}

        {/* if contact is edit show edit form */}
        {isEdit && (
          <EditForm
            name={name}
            number={number}
            onEditContact={this.handleEditContact}
          >
            <ControlsSave id={id} onDeleteContact={onDeleteContact} />
          </EditForm>
        )}

        {!isEdit && (
          <Controls
            id={id}
            onDeleteContact={onDeleteContact}
            onEditContact={this.handleEditContact}
          />
        )}
      </Item>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};

export default ContactItem;
