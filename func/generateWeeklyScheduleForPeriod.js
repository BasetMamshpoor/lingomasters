import Json from './Calendar.json';

const generateWeeklyScheduleForPeriod = (state, weeklyCalendar) => {
    const {weekDays, periods} = Json;

    return weekDays.map((day) => {
        const times = periods[state] || [];

        const schedule = times.map((time) => {
            let status = 'inactive';
            let id = null;

            if (weeklyCalendar[day]) {
                const existing = weeklyCalendar[day].find((entry) => entry.time === time);
                if (existing) {
                    status = existing.status;
                    id = existing.id;
                }
            }

            return {time, status, id};
        });

        return {day, schedule};
    });
};

export default generateWeeklyScheduleForPeriod;
