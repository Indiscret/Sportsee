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