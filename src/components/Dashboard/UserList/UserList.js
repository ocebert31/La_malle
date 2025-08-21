import React, { useState, useEffect } from "react";
import InfiniteScrollComponent from "../../../common/UI/infiniteScroll";
import { useAuth } from "../../../context/AuthContext";
import { getUsers, updateUserRole } from "../../../services/adminService";
import SearchBar from "../../../common/Articles/SearchBar.js";
import { checkHasMore } from "../../../utils/helpers/checkHasMore.js";
import ErrorAlert from "../../Notifications/ErrorAlert.js";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState("");
  const { token } = useAuth();
  const [limit] = useState(10);
  const [loading, setLoading] = useState(true);

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
      handleUserUpdated(userId, newRole);
    } catch {
      setShowErrorAlert(
        "Erreur lors du changement de rôle de l'utilisateur"
      );
    }
  };

  const handleUserUpdated = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleSearchQueryChange = (search) => {
    setSearchQuery(search);
    setPage(1);
  };

  return (
    <div className="px-3 sm:px-6 lg:px-12 py-4">
        <SearchBar handleSearchQueryChange={handleSearchQueryChange} />
        {loading && users.length === 0  ? (
          <div className="flex justify-center items-center py-6">
            <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
          </div>
        ) : !loading && users.length === 0 ? (
          <p className="text-gray-600 text-center text-lg mt-10">
            Aucun utilisateur pour l'instant.
          </p>
        ) : (
        <InfiniteScrollComponent loadMore={() => setPage(page + 1)} dataLength={users.length} hasMore={hasMore}>
            <ul className="space-y-4">
                {users.map((user) => (
                    <li key={user._id} className="border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <p className="text-gray-800 text-sm sm:text-base break-words">
                            {user.email}
                        </p>
                        {user.role !== "admin" && (
                            <select value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md bg-gray-50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#7a6bfc]">
                            <option value="author">Auteur</option>
                            <option value="reader">Lecteur</option>
                            </select>
                        )}
                    </li>
                ))}
            </ul>
        </InfiniteScrollComponent>
        )}
        {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
    </div>
  );
}

export default UserList;
