import { useOutsideClick } from '../hooks/useOutsideClick';
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

///////////////
//
const ModalContext = createContext();
//
///////
function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');

  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}
////////////////
function Open({
  children,
  opens: opensWindowName,
}: {
  children: React.ReactNode;
  opens: string;
}) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

//////////

////////
////////
function Window({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed top-0 start-0 w-full h-screen backdrop-blur-sm z-50 transition-all duration-500 mx-0 px-0">
      <div
        className="bg-stone-100 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg  sm:w-[70%] w-[95%]"
        ref={ref}
      >
        <div className="m-0 p-0 overflow-y-auto w-full max-h-[90vh]">
          <button
            onClick={close}
            className="absolute end-5 top-5 z-20 opacity-60 hover:opacity-100"
          >
            <img src="/x.svg" alt="icon" />
          </button>
          <div>{cloneElement(children)}</div>
        </div>
        <button
          className="bg-blue-600 rounded-2xl w-[150px] h-[50px] absolute end-4 bottom-6 text-2xl text-white"
          onClick={close}
        >
          Submit
        </button>
      </div>
    </div>,
    document.body
  );
}
/////////////
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
