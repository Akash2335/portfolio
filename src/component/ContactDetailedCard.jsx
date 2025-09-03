const ContactDetailedCard = ( { contact } ) => {
    return (
        <div className="flex items-center gap-1">
            <span className="">{ contact.icon }</span>
            { contact.link ? <a href={ contact.link } target="-blank" className="text-blue-500 hover:underline">{ contact.value }</a> : <span className="text-white/70">{ contact.value }</span> }
        </div>
    )
};
export default ContactDetailedCard;