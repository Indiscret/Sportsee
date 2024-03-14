import { useState, useEffect } from "react";
import { userPerformance } from "../../services/apiService";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import './PerformanceChart.css';

function PerformanceChart({ userId }) {
    // Définition d'un état local pour stocker les données de performance
    const [performance, setPerformance] = useState([]);

    // Utilisation de useEffect pour récuperer les données de performance lorsque l'ID de l'utilisateur change
    useEffect(() => {
        const fetchPerformanceData = async () => {
            try {
                // Appel à la fonction pour récupérer les données de performance de l'utilisateur
                const performanceData = await userPerformance(userId);
                // Mise à jour de l'état avec les données de performance récupérées
                setPerformance(performanceData);
            } catch (error) {
                console.log("Erreur lors de la récupération des données", error);
            }
        };
        fetchPerformanceData();
    }, [userId]); // Déclencher l'effet chaque fois que l'ID de l'utilisateur change

    // Fonction pour formater le type d'activité sur l'axe radial du graphique Radar
    function formatKind(kindIndex) {
        return performance.kind[kindIndex];
    };

    return (
        <div className="performance_chart">
            {/* Création du graphique Radar avec les données de performance */}
            <RadarChart outerRadius={90} width={300} height={300} data={performance?.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' fontSize={14} tickLine={false} tickFormatter={formatKind} />
                <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
            </RadarChart>
        </div>
    )
}

export default PerformanceChart;
