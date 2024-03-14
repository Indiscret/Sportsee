// Composant CustomTooltipActivity pour afficher un tooltip personnalisé pour le graphique d'activité
export const CustomTooltipActivity = ({ active, payload }) => {
  // Vérifie si le tooltip est actif et s'il y a des données à afficher
  if (active && payload && payload.length) {
    // Rendu du contenu du tooltip avec les valeurs de poids et de calories
    return (
      <div className='custom_tooltip_activity'>
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

// Composant CustomTooltipAverageSessions pour afficher un tooltip personnalisé pour le graphique de sessions moyennes
export const CustomTooltipAverageSessions = ({ active, payload }) => {
  // Vérifie si le tooltip est actif et s'il y a des données à afficher
  if (active && payload && payload.length) {
    // Rendu du contenu du tooltip avec la valeur de la durée de la session
    return (
      <div className="custom_tooltip_average_sessions">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

// Fonction CustomLegendScore pour afficher une légende personnalisée pour le score
export function CustomLegendScore(payload) {
  // Rendu de la légende avec le pourcentage par rapport à l'objectif
  return (
    <div className='custom_legend_score'>
      <p className="custom_legend_title">
        {payload.payload[0].payload.value}%
      </p>
      <p className='custom_legend_subtitle'> de votre <br></br> objectif</p>
    </div>
  )
}
