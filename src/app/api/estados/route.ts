const GET = async () => {
  const estados: { UF: { nome: string; sigla: string }[] } = await fetch(
    "https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros",
    {
      method: "GET",
    }
  ).then((response) => response.json());
  return Response.json(
    estados.UF.map((row) => ({ label: row.nome, value: row.sigla }))
  );
};

const POST = async (request: Request) => {
  console.log(request.body)

  return Response.json("Dados salvos com sucesso!")
}
export { GET, POST };
