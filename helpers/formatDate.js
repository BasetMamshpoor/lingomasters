const formatDatePhp = (date) => {
    let newDate = date;
    if (newDate)
        newDate = newDate.toISOString().split('T')[0]
    return newDate
};

export default formatDatePhp;