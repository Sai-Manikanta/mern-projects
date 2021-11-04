import { useSelector, useDispatch } from 'react-redux'
import { FaRegEye } from 'react-icons/fa'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { AiOutlineAliwangwang } from 'react-icons/ai'
import { selectContact, deleteContact, removeSelectedContact } from './../store/contacts/actionCreators'
import { openModal } from './../store/modal/actionCreators'

function Contacts() {
    const contacts = useSelector(store => store.contacts);
    const dispatch = useDispatch();

    if(contacts.list.filter(c => c.fullName.toLowerCase().includes(contacts.searchedQuery.toLowerCase())).length === 0){
        return (
            <div className="text-center text-gray-800 w-full">
                <AiOutlineAliwangwang className="inline-block" size="60" />
                <p className="text-xl">No Contacts</p>
            </div>
        )
    }

    return (
        <table>
            <thead>
                <tr className="border-b bg-gray-100">
                    <th className="p-2 text-left font-medium text-gray-600">Basic Info</th>
                    <th className="p-2 text-left font-medium text-gray-600">Company</th>
                    <th className="p-2 text-left font-medium text-gray-600">Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.list.filter(c => c.fullName.toLowerCase().includes(contacts.searchedQuery.toLowerCase())).map(contact => (
                    <tr key={contact._id} className={`border-b bg-gray-100 ${contacts.selectedContact.fullName && (contacts.selectedContact.fullName === contact.fullName) && 'bg-gray-200'}`}>
                        <td className="p-2 flex items-center">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white w-10 h-10 flex justify-center items-center rounded-full mr-3">
                                {contact.fullName.split(' ')[0] && contact.fullName.split(' ')[0][0]}
                                {contact.fullName.split(' ')[1] && contact.fullName.split(' ')[1][0]}
                            </span>
                            <div>
                                <p>{contact.fullName}</p>
                                <p className="text-sm">{contact.email}</p>
                            </div>
                        </td>
                        <td className="p-2">{contact.company}</td>
                        <td className="p-2">
                            <button className="mt-2 mr-2" onClick={() => dispatch(selectContact(contact))}>
                                <FaRegEye size="20" />
                            </button>
                            <button 
                                onClick={() => dispatch(openModal(contact))} 
                                className="mt-2 mr-2"
                            >
                                <BiEdit size="20" />
                            </button>
                            <button className="mt-2 mr-2" onClick={() => { 
                                dispatch(deleteContact(contact._id));
                                if(contact._id === contacts.selectedContact._id){
                                    dispatch(removeSelectedContact());
                                }
                            }}>
                                <MdDelete size="20" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Contacts