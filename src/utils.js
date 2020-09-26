export function formatSchedule(schedule){
    var hours = schedule.split('_')
    return `${hours[1]}-${hours[2]}`
}