import { useState } from "react";

const Livro = ({ name, category, description, image, author, year}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="w-1/4">
      <div className="flex flex-col flex-wrap items-center p-2 m-3 border-2 border-black rounded-lg">
        <img className="w-60" src={image} alt={name} loading="lazy"/>
        <div className="px-0.5">
          <h4><b>{name} - {category}</b></h4>
          <h4><b>{author} - {year}</b></h4>
          <p>{isReadMore ? description.slice(0, 100) : description}<span className="cursor-pointer" onClick={toggleReadMore}>{isReadMore ? '...ler mais' : '...ler menos'}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Livro;
