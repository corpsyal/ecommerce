export const products: IProduct[] = [
    {
        id: '9myf5qjyvr',
        name: 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 GMT',
        price: 960,
        pictures: [
            "https://www.tissotwatches.com/media/shop/catalog/product/cache/all/image/920x/17f82f742ffe127f42dca9de82fb58b1/T/0/T099.429.11.038.00_1.png"
        ],
        description: "La Tissot Gentleman est une montre polyvalente, à la fois ergonomique et élégante en toutes circonstances. Elle se porte aussi bien en environnement professionnel, qui privilégie des codes classiques, que le week-end, où elle se plie avec aisance aux activités de loisirs. A sa place dans la vie d'un homme moderne et actif, la Tissot Gentleman se fait le compagnon idéal de tous les jours, de toutes les occasions, de tous les styles."
    },
    {
        id: 'zlsnz1xlzw',
        name: 'TISSOT CARSON PREMIUM POWERMATIC 80',
        price: 570,
        pictures: [
            "https://www.tissotwatches.com/media/shop/catalog/product/cache/all/image/920x/17f82f742ffe127f42dca9de82fb58b1/T/1/T122.407.16.031.00_1.png"
        ],
        description: "La Tissot Gentleman est une montre polyvalente, à la fois ergonomique et élégante en toutes circonstances. Elle se porte aussi bien en environnement professionnel, qui privilégie des codes classiques, que le week-end, où elle se plie avec aisance aux activités de loisirs. A sa place dans la vie d'un homme moderne et actif, la Tissot Gentleman se fait le compagnon idéal de tous les jours, de toutes les occasions, de tous les styles."
    },
    {
        id: 'd23d6k2wbb',
        name: 'TISSOT GENTLEMAN POWERMATIC 80 SILICIUM',
        price: 750,
        pictures: [
            "https://www.tissotwatches.com/media/shop/catalog/product/cache/all/image/920x/17f82f742ffe127f42dca9de82fb58b1/T/1/T127.407.16.041.00.png"
        ],
        description: "La Tissot Gentleman est une montre polyvalente, à la fois ergonomique et élégante en toutes circonstances. Elle se porte aussi bien en environnement professionnel, qui privilégie des codes classiques, que le week-end, où elle se plie avec aisance aux activités de loisirs. A sa place dans la vie d'un homme moderne et actif, la Tissot Gentleman se fait le compagnon idéal de tous les jours, de toutes les occasions, de tous les styles."
    }
];

const delayDuration: number = 3000; // in milliseconds
 
export const fetchProducts = (): Promise<IProduct[]> => new Promise(async resolve => {
    setTimeout(() => resolve(products), delayDuration); // to simulate an api call
});

export const fetchProductById = (id: string): Promise<IProduct> => new Promise(async resolve => {
    setTimeout(() => {
        const product = products.find(product => product.id === id);
        resolve(product);
    }, delayDuration);
});