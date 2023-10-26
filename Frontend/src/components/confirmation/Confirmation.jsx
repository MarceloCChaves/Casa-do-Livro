import Button from "../Button/Button";

const Confirmation = ({
  handleConfirm,
  handleCancel,
  backgroundColor,
  borderColor,
  textColor,
  hoverColor,
}) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold">Tem certeza?</h1>
      <div className="flex justify-around">
        <Button
          text="Deletar"
          type="button"
          classes={`my-3 mx-2 px-10 py-3 border-2 text-white font-bold bg-${backgroundColor} hover:bg-${hoverColor} rounded-lg`}
          onclick={handleConfirm}
        />
        <Button
          text="Cancelar"
          type="button"
          classes={`my-3 mx-2 px-10 py-3 border-2 text-${textColor} font-bold border-${borderColor} rounded-lg`}
          onclick={handleCancel}
        />
      </div>
    </div>
  );
};

export default Confirmation;
