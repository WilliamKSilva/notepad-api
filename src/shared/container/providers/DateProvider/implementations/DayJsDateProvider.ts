import { IDateProvider } from "../IDateProvider"; 
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

class DayJsDateProvider implements IDateProvider {
    compareIfBefore(start_date: Date, end_date: Date): boolean {
        return dayjs(start_date).isBefore(end_date);
    }

    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }

    dateNow(): Date {
        return dayjs().toDate();
    }

    
}

export { DayJsDateProvider }