# 🐱 Chat Explorer - Application React avec Vite + TypeScript + Tailwind CSS

Bienvenue dans **Chat Explorer**, une application web simple développée avec **React**, **TypeScript**, **Vite** et **Tailwind CSS**. Ce projet a pour but de récupérer de façon aléatoire des faits amusants sur les chats ainsi que des images de chats aléatoires via deux APIs publiques.

---

## 🎯 Objectif de l'application

L'application permet à l'utilisateur de :

- Afficher un **fait aléatoire** sur les chats.
- Afficher une **image de chat aléatoire**.
- Générer plusieurs cartes contenant des faits et des images de chats via un bouton "Aléatoire".

Chaque clic sur le bouton ajoute une nouvelle carte contenant :
- Un texte (fact) tiré de l'API : `https://catfact.ninja/fact`
- Une image tirée de l'API : `https://cataas.com/cat?timestamp=${Date.now()}` (image aléatoire de chat)

---

## 🧠 Technologies utilisées

- **React** : bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Vite** : environnement de développement rapide et moderne.
- **TypeScript** : superset de JavaScript avec typage statique.
- **Tailwind CSS** : framework CSS utilitaire pour un design rapide et responsive.
- **APIs publiques** :
  - [Cat Fact API](https://catfact.ninja)
  - [Cataas (Cat as a Service)](https://cataas.com)

---

## 🔍 Structure globale

- `App.tsx` : point d'entrée principal de l'application.
- `Home.tsx` : composant principal avec :
  - Un **header** avec un champ de recherche (non-fonctionnel pour l’instant) et un bouton "Aléatoire".
  - Une section où les cartes avec des faits + images sont affichées.
- `useState` : pour stocker dynamiquement les cartes générées.
- `useEffect` : peut être utilisé pour précharger une première carte ou gérer des effets secondaires (ex: fetch initial, logs, etc.).

---

## 🚀 Lancer le projet

### 1. Cloner le repo

```bash
git clone https://github.com/Malik971/chat-random.git
cd chat-random
