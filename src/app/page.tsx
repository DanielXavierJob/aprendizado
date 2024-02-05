import HomePage from "@/section/home";
import React from "react";

const page = async () => {
  const BuscarEstados = async () => {
    const estados: {
      label: string;
      value: string;
    }[] = await fetch("http://localhost:3000/api/estados", {
      method: "GET",
    }).then((response) => response.json());
    return estados
  };
  return <HomePage estados={await BuscarEstados()}/>;
};

export default page;
