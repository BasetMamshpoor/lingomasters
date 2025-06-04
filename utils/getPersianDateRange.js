export default function getPersianDateRange(startDate, endDate,index=3) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dayOptions = {day: 'numeric'};
    const monthOptions = {month: 'long'};

    const startDay = start.toLocaleDateString('fa-IR', dayOptions);
    const startMonth = start.toLocaleDateString('fa-IR', monthOptions).slice(0, index);

    const endDay = end.toLocaleDateString('fa-IR', dayOptions);
    const endMonth = end.toLocaleDateString('fa-IR', monthOptions).slice(0, index);

    return `از ${startDay} ${startMonth} تا ${endDay} ${endMonth}`;
}