import { useState } from 'react';
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

function ContactItem({ name, number, id, onDeleteContact, onEditContact }) {
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditContact = (newName, newNumber) => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setEditName(prevName => (newName ? newName : prevName));
      setEditNumber(prevNumber => (newNumber ? newNumber : prevNumber));
      setIsEdit(false);

      onEditContact({
        id: id,
        name: newName ? newName : name,
        number: newNumber ? newNumber : number,
      });
    }
  };

  return (
    <Item>
      {/* if contact saved show contact info */}

      {!isEdit && (
        <ContactInfo>
          <ContactName>
            <HiUser />
            {editName}:
          </ContactName>

          <ContactTel>
            <ImPhone />
            {editNumber}
          </ContactTel>
        </ContactInfo>
      )}

      {/* if contact is edit show edit form */}
      {isEdit && (
        <EditForm
          name={editName}
          number={editNumber}
          onEditContact={handleEditContact}
        >
          <ControlsSave id={id} onDeleteContact={onDeleteContact} />
        </EditForm>
      )}

      {!isEdit && (
        <Controls
          id={id}
          onDeleteContact={onDeleteContact}
          onEditContact={handleEditContact}
        />
      )}
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};

export default ContactItem;
