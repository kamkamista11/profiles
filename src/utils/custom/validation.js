export const validateEmail = (email) =>
  email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

export const validatePhoneNumber = (number) => number.match(/^\d{9}$/);

export const vlidateDate = (date) => date.match(/(\d{4})-(\d{2})-(\d{2})/);

export const validateImage = (image) => image;

export const validateImageSize = ({size}) => size < 300000;
