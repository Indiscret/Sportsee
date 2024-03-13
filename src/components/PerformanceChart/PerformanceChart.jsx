import { useState, useEffect } from "react";
import { userPerformance } from "../../services/apiService";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import './PerformanceChart.css';

function PerformanceChart({ userId }) {
    const [performance, setPerformance] = useState([]);

    useEffect(() => {
        const fetchPerformanceData = async () => {
            try {
                const performanceData = await userPerformance(userId);
                setPerformance(performanceData);
            } catch (error) {
                console.log("Erreur lors de la récupération des données", error);
            }
        };
        fetchPerformanceData();
    }, [userId]);

    function formatKind(kindIndex) {
        return performance.kind[kindIndex];
    };

    return (
        <div className="performance_chart">
            <RadarChart outerRadius={90} width={300} height={300} data={performance?.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' fontSize={14} tickLine={false} tickFormatter={formatKind} />
                <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
            </RadarChart>
        </div>
    )
}

export default PerformanceChart