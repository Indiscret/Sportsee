export const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom_tooltip_activity'>
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

export const CustomTooltipAverageSessions = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip_average_sessions">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

export function CustomLegendScore(payload) {
  return (
    <div className='custom_legend_score'>
      <p className="custom_legend_title">
        {payload.payload[0].payload.value}%
      </p>
      <p className='custom_legend_subtitle'> de votre <br></br> objectif</p>
    </div>
  )
}