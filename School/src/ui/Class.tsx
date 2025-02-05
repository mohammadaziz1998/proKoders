import { useState } from 'react';
import Modal from './Modal';
import { ScheduleClassType } from '../utils/types';

export default function Class({ data }: ScheduleClassType) {
  const [name, setName] = useState('');
  console.log(open);

  return (
    <Modal>
      <Modal.Open opens={`${data.id}`}>
        <div
          //   onClick={() => setOpen((open) => !open)}
          className={`p-4 text-xl md:text-2xl lg:text-2xl justify-center items-center border font-thin  cursor-pointer hover:bg-stone-200 group flex flex-col h-40`}
        >
          <div className="flex flex-col items-center">
            <span>{name}</span>
            {data.time.start} - {data.time.end}
          </div>
          <img
            src="/plus.svg"
            alt="icon"
            className="absolute hidden group-hover:block w-[3vh] hover:-rotate-180 transition-all duration-1000"
          />
        </div>
      </Modal.Open>
      <Modal.Window name={`${data.id}`}>
        <div className=" h-[50vh] flex flex-col justify-center text-start mx-20 font-semibold text-2xl">
          <label htmlFor="className">The name of the class</label>
          <input
            type="text"
            id="className"
            required
            className="border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Modal.Window>
    </Modal>
  );
}
