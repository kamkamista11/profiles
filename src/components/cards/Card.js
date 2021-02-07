import React from "react";
import "./card.scss";

export const Card = ({person}) => {
  const {name, lastname, email, phone, date, about, image} = person;
  return (
    <div className="profile">
      <div className="profile__image">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <img
          src={image}
          width="70"
          height="70"
          alt="img"
        />
      </div>

      <p className="profile__name">{`${name} ${lastname}`}</p>
      <p className="profile__info">{email}</p>
      <p className="profile__info">{phone}</p>
      <p className="profile__info">{date}</p>
      <p className="profile__about">{about}</p>
    </div>
  );
};
