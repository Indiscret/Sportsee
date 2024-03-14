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
    const [user, setUser] = useState(null); // Définition d'un état local pour stocker les informations de l'utilisateur
    const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis les paramètres de l'URL

    // Utilisation de useEffect pour récupérer les données de l'utilisateur lorsque l'ID de l'utilisateur change
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Appel à la fonction pour récupérer les informations de l'utilisateur
                const userData = await userInfo(id);
                // Mise à jour de l'état avec les informations de l'utilisateur récupérées
                setUser(userData);
            } catch (error) {
                console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
            }
        };

        fetchUserData();
    }, [id]); // Déclencher l'effet chaque fois que l'ID de l'utilisateur change

    return (
        <main className="main_contain">
            <div className="dashboard">
                {/* Vérification si les informations de l'utilisateur sont disponibles */}
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
                    <div className="error"> {/* Affichage en cas d'erreur de récupération des informations utilisateur */}
                        <p>Les données de l'utilisateur ne sont pas disponibles. Veuillez réessayer plus tard.</p>
                    </div>
                )}
            </div>
        </main>
    )
}


export default User