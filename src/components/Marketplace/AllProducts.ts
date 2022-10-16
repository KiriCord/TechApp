import { QueryFunction } from "react-query";
import { CartItemType } from "../../Types/Types";

const Products = [
    {
        id: 0,
        category: "electronics",
        description: "GeForce RTX 3090 Ti — невероятно мощные видеокарты с производительностью класса TITAN. В их основе лежит Ampere — архитектура NVIDIA RTX второго поколения — с удвоенной производительностью трассировки лучей и технологий искусственного интеллекта благодаря улучшенным ядрам RT, тензорным ядрам и потоковым мультипроцессорам. Видеокарты также оснащены впечатляющим объемом видеопамяти 24 ГБ G6X, призванным обеспечить исключительный уровень игры и творчества.",
        image: "https://c.dns-shop.ru/thumb/st1/fit/0/0/c6475b54e38acab63c85abef44b301d5/fa635c2009353113ad347a59f977b40b47ed30baacae31c9a685c82436589e43.png.webp",
        price: 122999,
        title: "MSI GeForce RTX 3090 Ti GAMING X TRIO",
        amount: 500
    },
    {
        id: 1,
        category: "electronics",
        description: "Блок питания Aerocool KCAS 750W PLUS [KCAS-750M PLUS] с полной выходной мощностью 750 Вт может питать энергией все компоненты мощного системного блока игрового ПК с несколькими видеопроцессорами. Высокая энергоэффективность данной модели подтверждается сертификатом 80+ Bronze. Для присоединения всех нуждающихся в энергии компонентов ПК устройство предлагает кабели, на которых находятся основной разъем питания 20+4 pin и разъемы 1x 4+4 pin CPU, 7 SATA, 4x 6+2 pin PCI-E. Кабели в этой модели, воплощающей прогрессивные решения, выполнены отстегивающимися и снабжены черной оплеткой",
        image: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/b9ef46c04ec5f2ea36f53b071476e08c/7f66874b16ff41eb7f19414aa65c4ebc4d6f1dc6019bf39235fe4bea2a227db0.jpg.webp",
        price: 5999,
        title: "Блок питания AeroCool KCAS PLUS 750W",
        amount: 500
    },
    {
        id: 2,
        category: "electronics",
        description: "Этот лучший в мире процессор для настольных ПК гарантирует прекрасную производительность, идеально подходящий для игр и творчества.Сотрите границу между элитной производительностью для игр и рабочей станцией для создания контента благодаря самым передовым процессорам для настольных ПК в мире.Высокопроизводительная архитектура ядер «Zen 3» компании AMD позволяет процессорам Ryzen 9 5950X, развивать более высокую производительность в одно- и многопотоковом режимах, чем любой другой процессор для настольных ПК. Эта необходимая для успеха геймеров и разработчиков контента производительность помогает побеждать.",
        image: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9bb86f727bca1e0120cb7cb30e2fae08/4331628f3b2e2c36ee859638c701ab2d861436c732dc90c2d3e822e38a2f00aa.jpg.webp",
        price: 39999,
        title: "Процессор AMD Ryzen 9 5950X BOX",
        amount: 500
    },
    {
        id: 3,
        category: "electronics",
        description: "SSD Intel Optane D7-P5510 — это производительное решение, которое станет отличным выбором для высоконагруженных систем, используемых в корпоративной среде. В основе данной модели используются 3-битные ячейки памяти, выполненные по технологии 3D NAND, что вкупе с интерфейсом U.2, используемым для подключения к материнской плате, обеспечивает скорость записи и чтения до 4194 и 7000 МБ/с соответственно. Выдающейся особенностью модели является ее высокая отказоустойчивость, надежность и рабочий ресурс, который может достигать 14000 TBW. Для надежной сохранности данных также предусмотрено их шифрование.",
        image: "https://c.dns-shop.ru/thumb/st4/fit/0/0/d59b265ce0c1a534b5ff26990a264f1a/04d6ef182ca1a930e3709f41f38263d1477e1413e64208aac8e9bf2f3900d7d4.jpg.webp",
        price: 119999,
        title: "7680 ГБ PCIe накопитель Intel Optane D7-P5510",
        amount: 500
    },
    {
        id: 4,
        category: "electronics",
        description: "Плата MSI MEG Z690 UNIFY оформлена в классическом черном цвете и выделяется массивными алюминиевыми радиаторами, отвечающими за быстрый отвод тепла от компонентов. Сетевой адаптер Intel I225-V отвечает за стабильную связь с пропускной способностью 2500 Мбит/с. Помимо этого, в плате реализованы стандарты беспроводной связи Wi-Fi 6 и Bluetooth.",
        image: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/58dd037d162ae853bf498eb770725551/6141b2a03cfc13f15970651c094ea13acade73cbd0d26bab743514d9b922c202.jpg.webp",
        price: 44999,
        title: "Материнская плата MSI MEG Z690 UNIFY",
        amount: 500
    },
    {
        id: 5,
        category: "electronics",
        description: "Микрофон Fifine K658 с динамическим принципом действия и кардиоидной направленностью обеспечивает запись четкого звука во время игр или стрима. К функциональным особенностям модели относятся мониторинг в режиме реального времени, регулировка усиления и кнопка отключения звука. Металлический корпус устойчив к повреждениям и внешним воздействиям. Подключение осуществляется проводным способом с помощью разъемов jack 3.5 мм и USB Type-C. Среди других свойств Fifine K658 отмечаются антивибрационный подвес, многоцветная подсветка и выход на наушники.",
        image: "https://c.dns-shop.ru/thumb/st4/fit/0/0/729a87e8c19fdcfd69f28a2f00185d7c/7b217ef052fd045bb2ffab445b0fdebd3a93d0a77ec48ddabe0942cbc73b7ff9.jpg.webp",
        price: 7999,
        title: "Микрофон Fifine K658 черный",
        amount: 500
    }
];

export const AllProducts = async (): Promise<CartItemType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Products), 1000);
    });
}
