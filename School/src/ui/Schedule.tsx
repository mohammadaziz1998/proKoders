import Classes from './Classes';
import ClassDays from './ClassDays';
import { ScheduleType } from '../utils/types';

const scheduleClassTime = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
];
function Schedule() {
  return (
    <div className="border grid grid-cols-7 grid-rows-5 font-semibold  ">
      <div
        className={`bg-stone-600 row-start-0 row-end-1 col-start-0 col-end-1`}
      ></div>
      {scheduleClassTime.map((data: ScheduleType) => (
        <div
          key={data.num}
          className={` bg-stone-200 p-4 text-xl md:text-2xl lg:text-2xl flex justify-center items-center border `}
        >
          {data.num}
        </div>
      ))}
      <ClassDays />
      <Classes />
    </div>
  );
}

export default Schedule;
