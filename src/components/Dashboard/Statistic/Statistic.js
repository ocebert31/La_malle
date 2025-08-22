import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getMonthlyStats } from "../../../services/statisticService";
import { useAuth } from "../../../context/AuthContext"; 
import ErrorAlert from '../../Notifications/ErrorAlert';

export default function Statistiques() {
    const [data, setData] = useState([]);
    const { token } = useAuth();
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const statsData = await getMonthlyStats(token);
                setData(statsData); 
            } catch {
                setShowErrorAlert("Erreur lors de la mise à jour des statistiques");
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, [token]); 

    if(loading && data.length === 0) return (
              <div className="flex justify-center items-center py-6">
                <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
            </div>
    )

    if(!loading && data.length === 0 ) return (
        <p className="text-gray-600 text-center text-lg mt-10">
            Aucune statistique pour l'instant.
        </p>
    )

 return (
    <div className="pt-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full h-96 bg-white rounded-2xl shadow p-4 flex flex-col">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 text-center sm:text-left">
                📊 Évolution Mensuelle des Demandes et Prestations
            </h2>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 30 }}>
                        <XAxis dataKey="mois" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="demandes" fill="#7a6bfc" name="Demandes reçues" />
                        <Bar dataKey="prestations" fill="#a6d947" name="Prestations acceptées" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="pt-4 flex justify-center space-x-6">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary rounded-sm"></div>
                    <span className="text-sm font-medium">Demandes reçues</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-secondary rounded-sm"></div>
                    <span className="text-sm font-medium">Prestations acceptées</span>
                </div>
            </div>
        </div>
        {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
    </div>
  );
}