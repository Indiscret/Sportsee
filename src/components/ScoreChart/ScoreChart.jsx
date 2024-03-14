import { RadialBarChart, RadialBar, Legend } from "recharts";
import { CustomLegendScore } from "../CustomTooltip/CustomTooltip";
import './ScoreChart.css';

function ScoreChart({ todayScore, score }) {
    // Calcul du pourcentage de score
    const percentage = Math.round((score || todayScore) * 100);

    // Création des données de score
    const scoreData = [
        { name: 'Score', value: percentage, },
    ];

    return (
        <div className="score_chart">
            <h3 className="score_title">Score</h3>
            {/* Création du graphique RadialBar avec les données de score */}
            <RadialBarChart
                width={300}
                height={300}
                cx={150}
                cy={150}
                innerRadius={70}
                outerRadius={120}
                barSize={10}
                data={scoreData}
                startAngle={90}
                endAngle={90 + percentage / 100 * 360}
            >
                <RadialBar
                    dataKey="value"
                    fill='#E60000'
                    cornerRadius={100}
                    background={{ fill: '#ddd' }}
                />
                <Legend
                    content={<CustomLegendScore />}
                    wrapperStyle={{ top: '50%', transform: 'translate(0, -50%)', textAlign: 'center' }}
                />
            </RadialBarChart>
        </div>
    )
};

export default ScoreChart;
