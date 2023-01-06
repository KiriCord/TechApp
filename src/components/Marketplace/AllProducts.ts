import { CartItemType } from "../../Types/Types";
import { e1, e2, e3, e4, e5, e6 } from "../import";

const Images = [e1, e2, e3, e4, e5, e6];

const Products = [
  {
    id: 0,
    category: "foods",
    description:
      "Тщательно отобранные ингредиенты опускаются в бульон и долго томятся на медленном огне.",
    image: e1,
    price: 2500,
    title: `"Искушение Адепта"`,
    amount: 500,
  },
  {
    id: 1,
    category: "foods",
    description:
      "Целого краба обваливают в муке, после чего обжаривают до золотистой корочки.",
    image: e2,
    price: 1500,
    title: "Золотистый краб",
    amount: 500,
  },
  {
    id: 2,
    category: "foods",
    description:
      "Между двумя ломтиками хлеба положена толстая котлета кацу, а душистый кисло-сладкий соус устраняет жирный привкус.",
    image: e3,
    price: 600,
    title: "Кацу-сандо",
    amount: 500,
  },
  {
    id: 3,
    category: "foods",
    description:
      "Вкус жира почти не чувствуется, а особый рецепт запекания высвобождает сладкий вкус теста.",
    image: e4,
    price: 350,
    title: "Лепёшка «Мора»",
    amount: 500,
  },
  {
    id: 4,
    category: "foods",
    description:
      "Приятно хрустят благодаря небольшому количеству тёртых сосновых шишек.",
    image: e5,
    price: 120,
    title: "Мондштадтские оладушки",
    amount: 500,
  },
  {
    id: 5,
    category: "foods",
    description:
      "Кусочки идеальной толщины приготовлены со специями на меленном огне. ",
    image: e6,
    price: 750,
    title: "Мясо «Тяньшу»",
    amount: 500,
  },
];

export const AllProducts = async (): Promise<CartItemType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Products), 1000);
  });
};
