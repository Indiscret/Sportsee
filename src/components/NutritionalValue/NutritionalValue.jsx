import './NutritionalValue.css';

function NutritionalValue({ icon, unit, title }) {
    // Vérification si le titre est "Calories" pour déterminer le type de titre
    const isCalories = title === 'Calories';
    // Construction du type de titre en fonction de l'unité (kCal ou g)
    const titleType = isCalories ? `${unit}kCal` : `${unit}g`;

    return (
        <div className='nutritional_card'>
            <div className={`nutritional_${title}`}>
                <img src={icon} alt={title} />
            </div>
            <div className='nutritional_info'>
                <p className='nutritional_unit'>{titleType}</p>
                <p className='nutritional_title'>{title}</p>
            </div>
        </div>
    )
}

export default NutritionalValue;
