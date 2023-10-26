import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaTrash } from "react-icons/fa";

const Livro = ({ id, name, image, author, handleDelete }) => {
  const iconProps = {
    color: "#ff5555",
    size: 20,
  };

  return (
    <div>
      <div className="flex flex-col flex-wrap items-center px-10">
        <img className="w-52" src={image} alt={name} loading="lazy" />
        <div>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{author}</p>
          <div className="flex justify-between my-3 w-52">
            <Link to={`/${id}`}>
              <Button
                text="Editar livro"
                classes="px-8 py-3 border-2 border-black bg-white"
              />
            </Link>
            <Button
              text={<FaTrash {...iconProps} />}
              classes="px-3 py-3 border-2 border-red-600 bg-white"
              onclick={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livro;
