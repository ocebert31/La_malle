import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getMonthlyStats } from "../../../services/statisticService";
import { useAuth } from "../../../context/AuthContext"; 
import ErrorAlert from '../../Notifications/ErrorAlert';

export default function Statistiques() {
  const [data, setData] = useState([]);
   const { token } = useAuth();
    const [showErrorAlert, setShowErrorAlert] = useState('');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const statsData = await getMonthlyStats(token);
                setData(statsData); 
            } catch {
                setShowErrorAlert("Erreur lors de la mise à jour des statistiques");
            }
        };
        fetchStats();
    }, [token]); 


  return (
    <div className="pt-10">
        <div className="w-full h-96 bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-bold mb-4">📊 Évolution Mensuelle des Demandes et Prestations</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="mois" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="demandes" fill="#7a6bfc" name="Demandes reçues" />
                    <Bar dataKey="prestations" fill="#a6d947" name="Prestations acceptées" />
                </BarChart>
            </ResponsiveContainer>
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    </div>
  );
}