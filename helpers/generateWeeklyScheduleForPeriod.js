import Json from '../func/Calendar.json';

const generateWeeklyScheduleForPeriod = (state, weeklyCalendar) => {
    const { weekDays } = Json;
    const maxLength = Math.max(...weekDays.map(day => (weeklyCalendar[day] || []).length));

    return weekDays.map((day) => {
        let schedule = (weeklyCalendar[day] || [])
            .map(({ time, status }) => status === undefined ? { time } : null)
            .filter(Boolean) // حذف مقادیر null
            .sort((a, b) => a.time.localeCompare(b.time)); // مرتب‌سازی بر اساس زمان

        while (schedule.length < maxLength) {
            schedule.push({ time: "N/A" }); // پر کردن زمان‌های خالی
        }

        return { day, schedule }; // روزها همیشه در خروجی باشند، حتی اگر schedule خالی باشد
    });
};

export default generateWeeklyScheduleForPeriod;