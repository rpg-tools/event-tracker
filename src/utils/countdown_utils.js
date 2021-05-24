import {NBR_MINUTES_IN_HOUR, NBR_MINUTES_IN_DAY, NBR_MINUTES_IN_MONTH, NBR_MINUTES_IN_YEAR} from "@/constants/time_constant";

export function update_countdown(cd, time) {
    let total_minutes = cd.year * 12 * 30 * 24 * 60
    total_minutes = total_minutes + cd.month *30 *24 *60
    total_minutes = total_minutes + cd.day *24 *60
    total_minutes = total_minutes + cd.hour *60
    total_minutes = total_minutes + cd.minute
    total_minutes = total_minutes - time
    cd.year = 0
    cd.month = 0
    cd.day = 0
    cd.hour = 0
    cd.minute = 0
    console.log('--------------')
    console.log(total_minutes)

    cd.minute = total_minutes % NBR_MINUTES_IN_HOUR
    total_minutes = total_minutes - (total_minutes % NBR_MINUTES_IN_HOUR)

    cd.hour = (total_minutes % NBR_MINUTES_IN_DAY) / NBR_MINUTES_IN_HOUR
    total_minutes = total_minutes - (total_minutes % NBR_MINUTES_IN_DAY)

    cd.day = (total_minutes % NBR_MINUTES_IN_MONTH) / NBR_MINUTES_IN_DAY
    total_minutes = total_minutes - (total_minutes % NBR_MINUTES_IN_MONTH)

    cd.month = (total_minutes % NBR_MINUTES_IN_YEAR) / NBR_MINUTES_IN_MONTH
    total_minutes = total_minutes - (total_minutes % NBR_MINUTES_IN_YEAR)

    cd.year = total_minutes/ NBR_MINUTES_IN_YEAR
}
