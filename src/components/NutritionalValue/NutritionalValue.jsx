import './NutritionalValue.css';

function NutritionalValue({ icon, unit, title }) {
    const isCalories = title === 'Calories';
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

export default NutritionalValue