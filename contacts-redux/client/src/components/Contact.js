import { useSelector } from 'react-redux'

function Contact() {
    const contact = useSelector(store => store.contacts.selectedContact);

    if(!contact.hasOwnProperty('_id')) return null

    return (
        <div className="p-6 flex-grow bg-gray-100">
            <div className="flex flex-col items-center">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white w-14 h-14 text-xl rounded-full flex justify-center items-center">
                    {contact.fullName.split(' ')[0] && contact.fullName.split(' ')[0][0].toUpperCase() }
                    {contact.fullName.split(' ')[1] && contact.fullName.split(' ')[1][0].toUpperCase() }
                </span>
                <h2 className="mt-1 font-semibold text-gray-700">
                    {contact.fullName}
                </h2>
                <p className="text-sm text-gray-600">{contact.company}</p>
            </div>
            <table className="w-full mt-3">
                <tbody>
                    <tr className="border-b">
                        <th className="p-3 text-left text-gray-500 font-normal">Full Name:</th>
                        <td>{contact.fullName}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="p-3 text-left text-gray-500 font-normal">Email:</th>
                        <td>{contact.email}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="p-3 text-left text-gray-500 font-normal">Phone:</th>
                        <td>{contact.phone}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="p-3 text-left text-gray-500 font-normal">Company:</th>
                        <td>{contact.company}</td>
                    </tr>
                    <tr>
                        <th className="p-3 text-left text-gray-500 font-normal">Address:</th>
                        <td>{contact.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact
