export function checkDates(str) {
    return str.match(/[0-9]{1,2}[\/.\-_\\][0-9]{1,2}[\/.\-_\\][0-9]{4}/g);
}

const monthNumToStr = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};

export function getCurrDate() {
    const currDate = new Date();
    return `${monthNumToStr[currDate.getMonth()]} ${currDate.getDate()}, ${currDate.getFullYear()}`;
}
