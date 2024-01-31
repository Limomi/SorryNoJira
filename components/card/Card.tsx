import Image from "next/image";

const Card = ({ name, text }) => {
  let currentDate: object = new Date();
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <p className="card__text">{text}</p>
      <p className="card__date">
        {currentDate.getDate()}.{currentDate.getMonth() + 1}.
        {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default Card;
