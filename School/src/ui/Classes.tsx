import Class from './Class';
import { ScheduleClassType } from '../utils/types';

const scheduleClass = [
  { id: 123456789, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 12345678, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 1234567, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 123456, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 12345, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 1234, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 123, time: { start: '8:00', end: '9:00' }, day: 'sun' },
  { id: 456, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 13456, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 12456, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 12356, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 12346, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 12345633, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 12345611, time: { start: '8:00', end: '9:00' }, day: 'mon' },
  { id: 12345632, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 123456345, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 1234561111, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 123433232, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 123454333, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 1, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 16, time: { start: '8:00', end: '9:00' }, day: 'tue' },
  { id: 156, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 90, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 80, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 150, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 555, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 515, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 506, time: { start: '8:00', end: '9:00' }, day: 'wed' },
  { id: 1633, time: { start: '8:00', end: '9:00' }, day: 'thu' },
  { id: 1956, time: { start: '8:00', end: '9:00' }, day: 'thu' },
  { id: 193456, time: { start: '8:00', end: '9:00' }, day: 'thu' },
  { id: 183456, time: { start: '8:00', end: '9:00' }, day: 'thu' },
  { id: 173456, time: { start: '8:00', end: '9:00' }, day: 'thu' },
  { id: 163456, time: { start: '8:00', end: '9:00' }, day: 'thu' },
  { id: 143456, time: { start: '8:00', end: '9:00' }, day: 'thu' },
];

export default function Classes() {
  return (
    <>
      {scheduleClass.map((data: ScheduleClassType) => (
        <div key={data.id}>
          <Class data={data} />
        </div>
      ))}
    </>
  );
}
