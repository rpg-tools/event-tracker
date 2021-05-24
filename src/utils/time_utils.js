import {NBR_DAYS_IN_MONTH, NBR_HOURS_IN_DAY, NBR_MINUTES_IN_HOUR, NBR_MONTHS_IN_YEAR} from "@/constants/time_constant";

/* ----- ADD ----- */
/**
 * Add the number of minutes given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param minutes : int - Number of minutes to add.
 * @return The modified object.
 */
export function add_minute(obj, minutes) {
    obj.minute = obj.minute + minutes
    if (obj.minute >= NBR_MINUTES_IN_HOUR) {
        let nbr_add_hour = (obj.minute - (obj.minute % NBR_MINUTES_IN_HOUR)) / NBR_MINUTES_IN_HOUR
        obj.minute = obj.minute % NBR_MINUTES_IN_HOUR
        return add_hour(obj, nbr_add_hour)
    }
    return obj
}

/**
 * Add the number of hours given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param hours : int - Number of hours to add.
 * @return The modified object.
 */
export function add_hour(obj, hours){
    obj.hour = obj.hour + hours
    if (obj.hour >= NBR_HOURS_IN_DAY) {
        let nbr_add_day = (obj.hour - (obj.hour % NBR_HOURS_IN_DAY)) / NBR_HOURS_IN_DAY
        obj.hour = obj.hour % NBR_HOURS_IN_DAY
        return add_day(obj, nbr_add_day)
    }
    return obj
}

/**
 * Add the number of days given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param days : int - Number of days to add.
 * @return The modified object.
 */
export function add_day(obj, days) {
    obj.day = obj.day + days
    if (obj.day > NBR_DAYS_IN_MONTH) {
        let nbr_add_month = (obj.day - (obj.day % NBR_DAYS_IN_MONTH)) / NBR_DAYS_IN_MONTH
        obj.day = obj.day % NBR_DAYS_IN_MONTH
        return add_month(obj, nbr_add_month)
    }
    return obj
}

/**
 * Add the number of months given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param months : int - Number of months to add.
 * @return The modified object.
 */
export function add_month(obj, months) {
    obj.month = obj.month + months
    if (obj.month > NBR_MONTHS_IN_YEAR) {
        let nbr_add_year = (obj.month - (obj.month % NBR_MONTHS_IN_YEAR)) / NBR_MONTHS_IN_YEAR
        obj.month = obj.month % NBR_MONTHS_IN_YEAR
        return add_year(obj, nbr_add_year)
    }
    return obj
}

/**
 * Add the number of years given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param years : int - Number of years to add.
 * @return The modified object.
 */
export function add_year(obj, years) {
    obj.year = obj.year + years
    return obj
}

/* ----- REMOVE ----- */
/**
 * Subtract the number of minutes given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param minutes : int - Number of minutes to subtract.
 * @return The modified object.
 */
export function subtract_minute(obj, minutes) {
    if (minutes > obj.minute) {
        let delta_minutes = minutes - obj.minute
        obj.minute = NBR_MINUTES_IN_HOUR - (delta_minutes%NBR_MINUTES_IN_HOUR)
        return subtract_hour(obj, 1 + ((delta_minutes-(delta_minutes%NBR_MINUTES_IN_HOUR)) / NBR_MINUTES_IN_HOUR))
    } else {
        obj.minute = obj.minute - minutes
    }
    return obj
}

/**
 * Subtract the number of hours given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param hours : int - Number of hours to subtract.
 * @return The modified object.
 */
export function subtract_hour(obj, hours){
    if (hours > obj.hour) {
        let delta_hours = hours - obj.hour
        obj.hour = NBR_HOURS_IN_DAY - (delta_hours%NBR_HOURS_IN_DAY)
        return subtract_day(obj, 1 + ((delta_hours-(delta_hours%NBR_HOURS_IN_DAY)) / NBR_HOURS_IN_DAY))
    } else {
        obj.hour = obj.hour - hours
    }
    return obj
}

/**
 * Subtract the number of days given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param days : int - Number of days to subtract.
 * @return The modified object.
 */
export function subtract_day(obj, days) {
    if (days >= obj.day) {
        let delta_days = days - obj.day
        obj.day = NBR_DAYS_IN_MONTH - (delta_days%NBR_DAYS_IN_MONTH)
        return subtract_month(obj, 1 + ((delta_days-(delta_days%NBR_DAYS_IN_MONTH)) / NBR_DAYS_IN_MONTH))
    } else {
        obj.day = obj.day - days
    }
    return obj
}

/**
 * Subtract the number of months given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param months : int - Number of months to subtract.
 * @return The modified object.
 */
export function subtract_month(obj, months) {
    if (months >= obj.month) {
        let delta_months = months - obj.month
        obj.month = NBR_MONTHS_IN_YEAR - (delta_months%NBR_MONTHS_IN_YEAR)
        return subtract_year(obj, 1 + ((delta_months-(delta_months%NBR_MONTHS_IN_YEAR)) / NBR_MONTHS_IN_YEAR))
    } else {
        obj.month = obj.month - months
    }
    return obj
}

/**
 * Subtract the number of years given in parameters to the stored time.
 * @param obj - Obj containing the time.
 * @param years : int - Number of years to subtract.
 * @return The modified object.
 */
export function subtract_year(obj, years) {
    obj.year = obj.year - years
    return obj
}
