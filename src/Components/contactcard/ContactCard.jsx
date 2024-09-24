import './ContactCard.css'

const ContactCard = (props) =>{
    const { id, name, email } = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="fa-regular fa-trash-can heh"
            style={{color:"red", marginTop:"7px"}}
            onClick={() => props.ClickHander(id)}></i>
        </div>
        
    </div>
    )
}

export default ContactCard;