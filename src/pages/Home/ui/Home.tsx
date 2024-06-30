// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {

  return (
    <>
      <h1>Извините, у нас не было времени чтобы сделать лендинг</h1>
      <Link to="/reg">Это регистрация для заведения</Link>
      <br />
      <Link to="/pay">Это страница оплаты</Link>
    </>
  );
};

export default Home;
