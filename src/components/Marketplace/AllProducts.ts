import { CartItemType } from "../../Types/Types";

const Products = [
    {
        id: 0,
        category: "plants",
        description: "Вкусно и красиво.",
        image: "https://oir.mobi/uploads/posts/2021-08/1629780107_5-oir-mobi-p-klubnika-v-shokolade-buket-tsveti-krasivo-6.jpg",
        price: 6500,
        title: "Букет с клубникой в шоколаде и цветами",
        amount: 500
    },
    {
        id: 1,
        category: "plants",
        description: "Букет красивых цветочков.",
        image: "https://buket-ug.ru/upload/iblock/236/23688c93a99068bc2fc326d90b727170.jpg",
        price: 5500,
        title: "Цветы в коробке",
        amount: 500
    },
    {
        id: 2,
        category: "plants",
        description: "Натуральный эвкалипт.",
        image: "https://ir.ozone.ru/s3/multimedia-p/wc1000/6321141841.jpg",
        price: 1254,
        title: "Сухоцветы Эвкалипт",
        amount: 500
    },
    {
        id: 3,
        category: "plants",
        description: "Стабилизированный мох для декора.",
        image: "https://ir.ozone.ru/s3/multimedia-x/wc1000/6256076421.jpg",
        price: 270,
        title: "Стабилизированный мох",
        amount: 500
    },
    {
        id: 4,
        category: "plants",
        description: "Ещё один клёвый букет.",
        image: "https://ir.ozone.ru/s3/multimedia-c/wc1000/6132384864.jpg",
        price: 5546,
        title: "Пробуждение",
        amount: 500
    },
    {
        id: 5,
        category: "plants",
        description: "Уместен для любого стиля.",
        image: "https://pro-dachnikov.com/uploads/posts/2021-10/1633480509_45-p-vazi-s-sukhotsvetami-v-interere-foto-46.jpg",
        price: 7999,
        title: "Сухоцвет для интерьера",
        amount: 500
    }
];

export const AllProducts = async (): Promise<CartItemType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Products), 1000);
    });
}
