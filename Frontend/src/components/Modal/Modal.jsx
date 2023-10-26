const Modal = ({children}) => {
  return (
    <div className="flex justify-center items-center bg-modal h-screen w-screen absolute top-0">
      <div className="bg-white absolute z-10 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
