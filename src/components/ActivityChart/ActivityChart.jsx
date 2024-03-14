import { useState, useEffect } from "react";
import { userActivity } from "../../services/apiService";
import { CustomTooltipActivity } from "../CustomTooltip/CustomTooltip";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './ActivityChart.css';

function ActivityChart({ userId }) {
    // Définition d'un état local pour stocker les données d'activité
    const [activity, setActivity] = useState([]);

    // Utilisation de useEffect pour récupérer les données d'activités lorsque l'ID de l'utilisateur change
    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                // Appel à la fonction pour récupérer les données d'activité de l'utilisateur
                const activityData = await userActivity(userId);
                // Mise à jour de l'état avec les données d'activité récupérées
                setActivity(activityData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données d'activités:", error);
            }
        };
        fetchActivityData();
    }, [userId]); // Déclencher l'effet chaque fois que l'ID de l'utilisateur change

    // Fonction pour formater le jour sur l'axe X du graphique
    function formatDay(_, index) {
        return index + 1;
    };

    return (
        <div className="activity_chart">
            <h3 className="activity_title">Activité quotidienne</h3>
            {/* Création du graphique à barres avec les données d'activité */}
            <BarChart width={835} height={320} data={activity?.sessions} >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey='day' tickLine={false} tickFormatter={formatDay} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Tooltip content={<CustomTooltipActivity />} />
                <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} formatter={(value) => <span className='text-color'>{value}</span>} />
                <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
                <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calorie' fill='#E60000' />
            </BarChart>
        </div>
    )
}
export default ActivityChart;
