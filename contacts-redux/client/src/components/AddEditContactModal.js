import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal';
import { closeModal } from './../store/modal/actionCreators'
import { addContact, editContact, selectContact } from './../store/contacts/actionCreators'

const styles = {
    content: { top: '30%', left: '30%', right: '30%', bottom: '30%' }
}

Modal.setAppElement('#root');

function AddEditContactModal() {
    const [contact, setContact] = useState({ _id: '', fullName: '', email: '', phone: '', company: '', address: '' });

    const { isOpen, data } = useSelector(store => store.modal);
    const dispatch = useDispatch();

    useEffect(() => {
      if(data.hasOwnProperty('_id')){
        setContact(data);
      }
    }, [data])

    const resetContactStateAndCloseModal = () => {
      setContact({ _id: '', fullName: '', email: '', phone: '', company: '', address: '' });
      dispatch(closeModal());
    }

    const submitAddContact = (e) => {
      e.preventDefault();
      dispatch(addContact(contact));
      resetContactStateAndCloseModal();
    };

    const submitEditContact = (e) => {
      e.preventDefault();
      dispatch(editContact(contact));
      dispatch(selectContact(contact));
      resetContactStateAndCloseModal();
    };

    const handleInputChange = e => {
      setContact({
        ...contact,
        [e.target.id]: e.target.value
      });
    }

    return (
        <div>
            <Modal 
                isOpen={isOpen} 
                onRequestClose={resetContactStateAndCloseModal}
                style={styles}
            >
                <form onSubmit={data.hasOwnProperty('_id') ? submitEditContact : submitAddContact }>
                  <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" value={contact.fullName} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"  value={contact.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone"  value={contact.phone} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" value={contact.company} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" value={contact.address} onChange={handleInputChange} />
                  </div>
                  <button type="submit">
                    {data.hasOwnProperty('_id') ? 'Edit' : 'Add'}
                  </button>
                </form>
            </Modal>
        </div>
    )
}

export default AddEditContactModal