interface IDateProvider {
    compareIfBefore(start_date: Date, end_date: Date): boolean;
    convertToUTC(date: Date): string;
    dateNow(): Date;
}

export { IDateProvider }