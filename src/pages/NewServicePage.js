import { createService } from "../services/serviceService";
import { formDataBuilder } from "../utils/formDataBuilder";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ServiceForm from "../common/Services/ServiceForm";

function NewServicePage() {
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        await createService(formDataBuilder(data), token);
        navigate("/services");
    };

    return (
        <ServiceForm onSubmit={handleCreate} submitLabel="Ajouter la préstation" title="Publier une préstation"/>
    );
}

export default NewServicePage;
