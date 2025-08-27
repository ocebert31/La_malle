import React, { useState, useEffect } from "react";
import InfiniteScrollComponent from "../../../common/UI/infiniteScroll";
import { useAuth } from "../../../context/AuthContext";
import { getUsers, updateUserRole, deleteUser } from "../../../services/adminService";
import SearchBar from "../../../common/Services/SearchBar.js";
import { checkHasMore } from "../../../utils/pagination.js";
import ErrorAlert from "../../Notifications/ErrorAlert.js";
import DeleteUserButton from "./DeleteUserButton.js";
import DeleteUserModal from "./DeleteUserModal.js";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState("");
  const { token } = useAuth();
  const [limit] = useState(10);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    setUsers([]);
    setPage(1);
    setHasMore(true);
  }, [searchQuery]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const result = await getUsers(searchQuery, page, limit, token);
        setUsers((prevUsers) => page === 1 ? result.users : [...prevUsers, ...result.users]);
        checkHasMore(result, limit, setHasMore);
      } catch {
        setShowErrorAlert("Erreur lors du chargement des utilisateurs");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, [searchQuery, page, limit, token]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole, token);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch {
      setShowErrorAlert("Erreur lors du changement de rôle de l'utilisateur");
    }
  };

    const handleSearchQueryChange = (search) => {
      setSearchQuery(search);
      setPage(1);
    }


  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setModalLoading(true);
      await deleteUser(selectedUser._id, token);
      setUsers((prev) => prev.filter(u => u._id !== selectedUser._id));
    } catch {
      alert("Erreur lors de la suppression de l'utilisateur");
    } finally {
      setModalLoading(false);
      setModalOpen(false);
      setSelectedUser(null);
    }
  };

  return (
    <div className="px-3 sm:px-6 lg:px-12 py-4">
      <SearchBar handleSearchQueryChange={handleSearchQueryChange} />
      {loading && users.length === 0 ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
        </div>
      ) : !loading && users.length === 0 ? (
        <p className="text-gray-600 text-center text-lg mt-10">Aucun utilisateur pour l'instant.</p>
      ) : (
        <InfiniteScrollComponent loadMore={() => setPage(page + 1)} dataLength={users.length} hasMore={hasMore}>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user._id} className="border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <p className="text-gray-800 text-sm sm:text-base break-words">{user.email}</p>
                {user.role !== "admin" && (
                  <div className="flex flex-col sm:flex-row sm:ml-auto gap-2 w-full sm:w-auto">
                    <div className="flex gap-2">
                      <select 
                      value={user.role}
                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded-md bg-gray-50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#7a6bfc]">
                        <option value="author">Auteur</option>
                        <option value="reader">Lecteur</option>
                      </select>
                      <DeleteUserButton user={user} onOpen={handleOpenModal} />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </InfiniteScrollComponent>
      )}
      {showErrorAlert && <ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)} />}
      <DeleteUserModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        userEmail={selectedUser?.email}
        loading={modalLoading}
      />
    </div>
  );
}

export default UserList;
