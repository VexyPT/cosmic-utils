export function isDateValid(date: string): boolean {
    return !isNaN(Date.parse(date));
}

export default isDateValid;