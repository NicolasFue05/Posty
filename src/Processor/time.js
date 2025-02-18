// Make a function that return's the time in seconds passed by the timeInput in the StartMenu return 
export default function getTime(minutes) {
  const timeMapping = {
    '1 min': 60000,
    '5 min': 300000,
    '10 min': 600000,
    '15 min': 900000,
    '30 min': 1800000,
    '60 min': 3600000,
    '90 min': 5400000,
    '120 min': 7200000,
    '150 min': 9000000
  }

  return timeMapping[minutes] || 60000 // Default to 1 min if invalid
}