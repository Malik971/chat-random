import { useState } from "react";

function Home() {

  type Card = {
  fact: string;
  image: string;
};
  const [cards, setCards] = useState<Card[]>([]);


  const getCatCard = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();

      const newCard = {
        fact: data.fact,
        image: `https://cataas.com/cat?timestamp=${Date.now()}`, // image aléatoire
      };

      setCards((prevCards) => [newCard, ...prevCards]); // ajoute au début
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
  };

  return (
    <section>
      <article>
        <header className="bg-white shadow-lg px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">
              Chat Explorer 🐱
            </div>

            <div className="flex-1 mx-4">
              <input
                type="text"
                placeholder="Rechercher un chat..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                onClick={getCatCard}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Aléatoire
              </button>
            </div>
          </div>
        </header>

        {/* Cartes affichées en dessous */}
        <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={card.image}
                alt="Chat"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700">{card.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Home;
