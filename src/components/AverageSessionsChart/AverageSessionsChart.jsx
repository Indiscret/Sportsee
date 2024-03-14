import { useState, useEffect } from "react";
import { userAverageSessions } from "../../services/apiService";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { CustomTooltipAverageSessions } from "../CustomTooltip/CustomTooltip";
import './AverageSessionsChart.css';

function AverageSessionsChart({ userId }) {
    // Définition d'un état local pour stocker les données de sessions moyennes
    const [averageSessions, setAverageSessions] = useState([]);

    // Utilisation de useEffect pour récupérer les données de sessions moyennes lorsque l'ID de l'utilisateur change
    useEffect(() => {
        const fetchAverageSessionsData = async () => {
            try {
                // Appel à la fonction pour récupérer les données de sessions moyennes de l'utilisateur
                const averageSessionsData = await userAverageSessions(userId);
                // Mise à jour de l'état avec les données de sessions moyennes récupérées
                setAverageSessions(averageSessionsData)
            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };
        fetchAverageSessionsData();
    }, [userId]); // Déclencher l'effet chaque fois que l'ID de l'utilisateur change

    // Fonction pour formater la semaine sur l'axe X du graphique
    function formatWeek(index) {
        const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return daysOfWeek[index - 1];
    };

    return (
        <div className="average_sessions_chart"
            // Fonction qui réinitialise le background lorsque la souris quitte le graphique
            onMouseLeave={() => {
                const div = document.querySelector(".average_sessions_chart");
                div.style.background = "";
            }}
        >
            <h3 className="average_sessions_title">Durée moyenne des sessions</h3>
            {/* Création du graphique à ligne avec les données de sessions moyennes */}
            <LineChart width={300} height={300} data={averageSessions?.sessions}
                // Fonction qui change la couleur du background lorsque la souris se déplace sur la graphique
                onMouseMove={(e) => {
                    // Vérifie si le tooltip est affiché
                    if (e.isTooltipActive === true) {
                        const div = document.querySelector(".average_sessions_chart");
                        const divWidth = div.clientWidth;
                        // Calcule la position horizontale de la souris par rapport à la largeur du graphique
                        const mouseXpercentage = Math.round(
                            (e.activeCoordinate.x / divWidth) * 100
                        )
                        div.style.background = `linear-gradient(90deg, #ff0000 ${mouseXpercentage}%, #e60000 ${mouseXpercentage}%, #e60000 100%)`;
                    }
                }}
            >
                <XAxis dataKey='day' stroke="rgba(255,255,255, 0.6)" axisLine={false} tickLine={false} tickFormatter={formatWeek} />
                <YAxis dataKey='sessionLength' hide domain={['dataMin -10', 'dataMax + 20']} />
                <Tooltip content={<CustomTooltipAverageSessions />} cursor={false} />
                <Line dataKey='sessionLength' type="natural" stroke="rgba(255,255,255, 0.6)" strokeWidth={2} dot={false} activeDot={{ stroke: 'rgba(255,255,255, 0.6)', strokeWidth: 10, r: 5, }} />
            </LineChart>
        </div>
    )

}

export default AverageSessionsChart;
