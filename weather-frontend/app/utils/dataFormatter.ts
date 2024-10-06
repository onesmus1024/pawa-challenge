


export const dateFormatter = (date: string) => {
    const d = new Date(date.replace(' ', 'T'));
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString(undefined, options);
}
