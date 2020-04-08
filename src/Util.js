const parseMonth = (monthNumber) => {
    if (monthNumber.length === 1 && monthNumber < 10) {
        return `0${monthNumber}`;
    }
    return `${monthNumber}`
}

export const calculateFromDateString = (month) => {
    return `2016-${parseMonth(month)}-01`;
}

export const calculateToDateString = (month) => {
    return `2016-${parseMonth(month)}-31`;
}