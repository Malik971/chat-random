import { useEffect, useState } from "react";

function textChat() {
  const TEXTCHAT = "https://catfact.ninja/fact";

  const [declaration, setDeclaration] = useState("");

  const getData = async () => {
    try {
      const reponse = await fetch(TEXTCHAT);
      const data = await reponse.json();
      if (data) {
        setDeclaration(data.fact);
      } else {
        setDeclaration("Erreur nous n'avons pas obtenue les données");
      }
    } catch (error) {
      console.log(error);
      setDeclaration("Pas de reponse de la request");
    }
  };

  useEffect(() => {getData})

  return (
    <>
      <button onClick={getData}>Obtenir un fait de chat</button>
      <p>{declaration}</p>
    </>
  );
}

export default textChat;
