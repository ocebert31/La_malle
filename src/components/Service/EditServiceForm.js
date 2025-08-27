import { updateService } from "../../services/serviceService";
import { formDataBuilder } from "../../utils/formDataBuilder";
import { useAuth } from "../../context/AuthContext";
import ServiceForm from "../../common/Services/ServiceForm";

function EditServiceForm({ service, setService, cancelEdit }) {
    const { token } = useAuth();

    const handleEdit = async (data) => {
        const formData = formDataBuilder(data);
        const result = await updateService(service._id, formData, token);
        setService(result.service);
        cancelEdit();
    };

    return (
        <ServiceForm initialValues={service} onSubmit={handleEdit} cancelEdit={cancelEdit} title="Édition de la préstation"/>
    );
}

export default EditServiceForm;
