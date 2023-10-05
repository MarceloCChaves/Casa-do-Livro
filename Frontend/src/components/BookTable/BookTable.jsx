import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const BookTable = ({ name, image, id, handleDelete, handleEdit }) => {
  return (
    <tbody>
      <tr>
        <td className="border border-slate-700 p-3">
          <img
            className="rounded-full w-16 h-16 border-2 border-sky-700"
            src={image}
            alt={name}
          />
        </td>
        <td className="border border-slate-700 p-3">{name}</td>
        <td className="border border-slate-700 p-3">
          <Link to={`/admin/${id}`}>
            <Button
              classes="bg-green-600 text-white my-3 py-2 px-5 rounded-lg"
              type="button"
              text="Editar livro"
              onclick={handleEdit}
            />
          </Link>
        </td>
        <td className="border border-slate-700 p-3">
          <Button
            classes="bg-red-600 text-white my-3 py-2 px-5 rounded-lg"
            type="button"
            text="Deletar livro"
						onclick={handleDelete}
          />
        </td>
      </tr>
    </tbody>
  );
};
export default BookTable;
