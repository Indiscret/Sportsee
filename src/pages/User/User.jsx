import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userInfo } from "../../services/apiService";
import NutritionalValue from "../../components/NutritionalValue/NutritionalValue";
import ActivityChart from "../../components/ActivityChart/ActivityChart";
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

    if(!user) 
    return <p className="loading">Loading...</p>;

    return (
        <main className="main_contain">
        
        <div className="user">
            <h1 className="user_title">Bonjour <span>{user.userInfos.firstName}</span></h1>
            <p className="user_subtitle">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="activity">
            <ActivityChart userId={id}/>
        </div>
        <div className="average_sessions">
        </div>
        <div className="nutritional">
            <NutritionalValue icon={Calories} unit={user.keyData.calorieCount} title='Calories'/>
            <NutritionalValue icon={Proteins} unit={user.keyData.proteinCount} title='Proteines'/>
            <NutritionalValue icon={Glucides} unit={user.keyData.carbohydrateCount} title='Glucides'/>
            <NutritionalValue icon={Lipids} unit={user.keyData.lipidCount} title='Lipides'/>
        </div>
        </main>
    )
}

export default User