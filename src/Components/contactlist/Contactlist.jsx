import ContactCard from '../contactcard/ContactCard';
import './Contactlist.css'

const Contactlist = (props) =>{
    // console.log(props);

        const deleteContactHandler = (id) => {
            props.getContactId(id);
        }; 
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHander={deleteContactHandler} key={ contact.id }  />;
    });
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default Contactlist;