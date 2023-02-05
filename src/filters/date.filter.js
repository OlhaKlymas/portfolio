export default function dateFilter (value, format = 'date') {
    const options = {}
    if (format.includes('year')) {
        options.year = 'numeric'
    }
    if (format.includes('date')) {
        options.day = '2-digit'
        options.month = 'numeric'
        options.year = 'numeric'
    }
    if (format.includes('time')) {
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.second = '2-digit'
    }

    return new Intl.DateTimeFormat('en-CA', options).format(new Date(value))
}
