import { formatLongDate } from "../../../utils/date";
import InfoLineContact from "./InfoLineContact";
import StatusSelect from "./StatusSelect";
import "./ContactCard.css";
import ContactDescription from "./ContactDescription";

function ContactCard({ contact, setContacts }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-primary break-words">
                {contact.firstName} {contact.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
            {contact.urgence && (
                <span className="bg-secondary text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                {contact.urgence}
                </span>
            )}
            <StatusSelect contact={contact} setContacts={setContacts} />
            </div>
        </div>
        <div className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base mb-4">
            <InfoLineContact label="Demande faite le" value={formatLongDate(contact)} />
            <InfoLineContact label="Email" value={contact.email} />
            <InfoLineContact label="Téléphone" value={contact.phone} />
            <InfoLineContact label="Type" value={contact.typeRequest} />
            <InfoLineContact
            label="Date souhaitée"
            value={
                contact.desiredDate
                ? new Date(contact.desiredDate).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    })
                : "Non précisée"
            }/>
        </div>
        <ContactDescription contact={contact} />
    </div>
  );
}

export default ContactCard;
