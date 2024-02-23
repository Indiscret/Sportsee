import { useState, useEffect } from "react";
import { userActivity } from "../../services/apiService";
import { CustomTooltipActivity } from "../CustomTooltip/CustomTooltip";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function ActivityChart({ userId }) {
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const activityData = await userActivity(userId);
                setActivity(activityData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données d'activités:", error);
            }
        };
        fetchActivityData();
    }, [userId]);

    return (
        <div className="activity_chart">
            <h3 className="activity_title">Activité quotidienne</h3>
            <BarChart width={835} height={320} data={activity && activity.sessions} >
                <CartesianGrid strokeDasharray="3 3"  vertical={false}/>
                <XAxis dataKey='day' tickLine={false} />
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
export default ActivityChart