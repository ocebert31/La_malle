import { formatLongDate } from "../../../utils/helpers/date";
import InfoLineRequest from "./InfoLineRequest";
import StatusSelect from "./StatusSelect";
import "./RequestCard.css"; 
import RequestDescription from "./RequestDescription";

function RequestCard({ request, setRequests }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold text-[#7a6bfc]">
                {request.firstName} {request.name}
            </h2>
            {request.urgence && (
                <span className="bg-[#a6d947] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {request.urgence}
                </span>
            )}
            <StatusSelect request={request} setRequests={setRequests} />
        </div>
        <div className="space-y-1 text-gray-600 mb-3">
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
            }
            />
        </div>
        <RequestDescription request={request}></RequestDescription>
    </div>
  );
}

export default RequestCard;
