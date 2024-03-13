import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userInfo } from "../../services/apiService";
import NutritionalValue from "../../components/NutritionalValue/NutritionalValue";
import ActivityChart from "../../components/ActivityChart/ActivityChart";
import AverageSessionsChart from "../../components/AverageSessionsChart/AverageSessionsChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import Calories from '../../assets/Calories.png';
import Proteins from '../../assets/Proteins.png';
import Glucides from '../../assets/Glucides.png';
import Lipids from '../../assets/Lipids.png';
import './User.css';


function User() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await userInfo(id);
                setUser(userData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
            }
        };

        fetchUserData();
    }, [id]);

    return (
        <main className="main_contain">
            <div className="dashboard">
                {user ? (
                    <>
                        <div className="user">
                            <h1 className="user_title">Bonjour <span>{user?.userInfos?.firstName}</span></h1>
                            <p className="user_subtitle">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
                        <div className="chart">
                            <div className="left_column">
                                <div className="activity">
                                    <ActivityChart userId={id} />
                                </div>
                                <div className="other_chart">
                                    <div className="average_sessions">
                                        <AverageSessionsChart userId={id} />
                                    </div>
                                    <div className="performance">
                                        <PerformanceChart userId={id} />
                                    </div>
                                    <div className="score">
                                        <ScoreChart todayScore={user?.todayScore} score={user?.score} />
                                    </div>
                                </div>
                            </div>
                            <div className="right_column">
                                <div className="nutritional">
                                    <NutritionalValue icon={Calories} unit={user?.keyData?.calorieCount} title='Calories' />
                                    <NutritionalValue icon={Proteins} unit={user?.keyData?.proteinCount} title='Proteines' />
                                    <NutritionalValue icon={Glucides} unit={user?.keyData?.carbohydrateCount} title='Glucides' />
                                    <NutritionalValue icon={Lipids} unit={user?.keyData?.lipidCount} title='Lipides' />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="error">
                        <p>Les données de l'utilisateur ne sont pas disponibles. Veuillez réessayer plus tard.</p>
                    </div>
                )}
            </div>
        </main>
    )
}


export default User