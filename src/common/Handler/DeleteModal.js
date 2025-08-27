function DeleteModal({ isOpen, onClose, onConfirm, resourceName, loading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
        <p className="mb-6">
          Êtes-vous sûr(e) de vouloir supprimer <strong className="text-sm">{resourceName}</strong> ?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            disabled={loading}
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-secondary text-white hover:bg-primary transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-t-white border-white rounded-full animate-spin"></div>
            ) : (
              "Supprimer"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
