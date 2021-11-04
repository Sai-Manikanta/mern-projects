import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Contact from './components/Contact';
import AddEditContactModal from "./components/AddEditContactModal";

function App() {
    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-10">
            <Header />
            <div className="flex items-start space-x-8 mt-8">
                <Contacts />
                <Contact />
            </div>
            <AddEditContactModal />
        </div>
    )
}

export default App
