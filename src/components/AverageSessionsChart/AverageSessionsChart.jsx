import { useState, useEffect } from "react";
import { userAverageSessions } from "../../services/apiService";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { CustomTooltipAverageSessions } from "../CustomTooltip/CustomTooltip";
import './AverageSessionsChart.css';


function AverageSessionsChart({ userId }) {
    const [averageSessions, setAverageSessions] = useState([]);

    useEffect(() => {
        const fetchAverageSessionsData = async () => {
            try {
                const averageSessionsData = await userAverageSessions(userId);
                setAverageSessions(averageSessionsData)
            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };
        fetchAverageSessionsData();
    }, [userId]);

    function formatWeek(index) {
        const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return daysOfWeek[index - 1];
    };

    return (
        <div className="average_sessions_chart" onMouseLeave={() => {
            const div = document.querySelector(".average_sessions_chart");
            div.style.background = "";
        }}
        >
            <h3 className="average_sessions_title">Durée moyenne des sessions</h3>
            <LineChart width={300} height={300} data={averageSessions?.sessions}
                onMouseMove={(e) => {
                    if (e.isTooltipActive === true) {
                        const div = document.querySelector(".average_sessions_chart");
                        const divWidth = div.clientWidth;
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

export default AverageSessionsChart
