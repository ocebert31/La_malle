import { formatLongDate } from "../../../utils/helpers/date";
import InfoLineRequest from "./InfoLineRequest";
import StatusSelect from "./StatusSelect";
import "./RequestCard.css";
import RequestDescription from "./RequestDescription";

function RequestCard({ request, setRequests }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#7a6bfc] break-words">
                {request.firstName} {request.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
            {request.urgence && (
                <span className="bg-[#a6d947] text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                {request.urgence}
                </span>
            )}
            <StatusSelect request={request} setRequests={setRequests} />
            </div>
        </div>
        <div className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base mb-4">
            <InfoLineRequest label="Demande faite le" value={formatLongDate(request)} />
            <InfoLineRequest label="Email" value={request.email} />
            <InfoLineRequest label="Téléphone" value={request.phone} />
            <InfoLineRequest label="Type" value={request.typeRequest} />
            <InfoLineRequest
            label="Date souhaitée"
            value={
                request.desiredDate
                ? new Date(request.desiredDate).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    })
                : "Non précisée"
            }/>
        </div>
        <RequestDescription request={request} />
    </div>
  );
}

export default RequestCard;
