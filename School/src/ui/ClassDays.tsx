import { ScheduleDaysType } from '../utils/types';

const scheduleDays = [
  { day: 'sun' },
  { day: 'mon' },
  { day: 'tus' },
  { day: 'wen' },
  { day: 'thu' },
];

export default function ClassDays() {
  return (
    <div className={`col-start-0 col-end-1 row-start-1 row-end-6`}>
      {scheduleDays.map((data: ScheduleDaysType) => (
        <div
          key={data.day}
          className={`p-4 text-xl md:text-2xl lg:text-2xl flex justify-center items-center border h-40`}
        >
          {data.day}
        </div>
      ))}
    </div>
  );
}
//sm:col-start-0 sm:col-end-1 sm:row-start-1 sm:row-end-8
