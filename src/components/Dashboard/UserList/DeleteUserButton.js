function DeleteUserButton({ user, onOpen }) {
  return (
    <button onClick={() => onOpen(user)} className="ml-2 px-3 py-1 text-sm bg-secondary text-white rounded hover:bg-primary transition">
      Supprimer
    </button>
  );
}

export default DeleteUserButton;
