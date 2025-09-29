import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ErrorAlert from "../../components/Notifications/ErrorAlert";
import DeleteModal from "./DeleteModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ resource, deleteRessource, onDelete, onDeleteParam = "id", label }) {
  const { token } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteRessource(resource._id, token);
      if (onDeleteParam === "object") {
        onDelete(resource);
      } else {
        onDelete(resource._id);
      }
      setModalOpen(false);
    } catch {
      setShowErrorAlert(`Erreur lors de la suppression ${label}`);
    } finally {
      setLoading(false);
    }
  };

  const resourceName = resource.name || resource.email || "cet élément";

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="ml-2 px-3 py-1 text-sm bg-secondary text-white rounded hover:bg-primary transition">
        <FontAwesomeIcon icon={faTrash} />
      </button>
      {showErrorAlert && (
        <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert("")}/>
      )}
      <DeleteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onConfirm={handleDelete} resourceName={resourceName} loading={loading}/>
    </div>
  );
}

export default DeleteButton;
