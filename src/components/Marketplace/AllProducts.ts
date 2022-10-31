import { CartItemType } from "../../Types/Types";

const Products = [
    {
        id: 0,
        category: "plants",
        description: "Красивые цветочки.",
        image: "https://ir.ozone.ru/s3/multimedia-u/wc1000/6132334950.jpg",
        price: 11280,
        title: "Лунная ночь",
        amount: 500
    },
    {
        id: 1,
        category: "plants",
        description: "Букет красивых цветочков.",
        image: "https://ir.ozone.ru/s3/multimedia-n/wc1000/6425103827.jpg",
        price: 2500,
        title: "Яркий день",
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
        description: "Белое золото прямиком из здания с номером 5.",
        image: "https://ir.ozone.ru/s3/multimedia-7/wc1000/6253204279.jpg",
        price: 7999,
        title: "Сухоцвет Хлопок",
        amount: 500
    }
];

export const AllProducts = async (): Promise<CartItemType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Products), 1000);
    });
}
