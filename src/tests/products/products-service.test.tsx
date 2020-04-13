import { products, fetchProducts, fetchProductById, findProductById, calcTotalPrice } from "../../services/products";

describe('Products service', () => {

    it('should find product in collection', () => {
        const productId = 'zlsnz1xlzw';
        const product = findProductById(products)(productId);
        expect(product).toBe(products[1]);
    });

    it('should return undefined with a wrong id', () => {
        const productId = 'azerty';
        const product = findProductById(products)(productId);
        expect(product).toBe(undefined);
    });

    it('should return undefined with products list undefined', () => {
        const productId = 'azerty';
        const product = findProductById()(productId);
        expect(product).toBe(undefined);
    });

    it('Return all products', async () => {
        const fetchedProducts = await fetchProducts();
        expect(fetchedProducts).toBe(products);
    });

    it('Return product by id', async () => {
        const productId: string = '9myf5qjyvr';
        const fetchedProduct = await fetchProductById(productId);
        expect(fetchedProduct).toBe(products[0]);
    });

    it('Return undefined with a wrong id', async () => {
        const productId: string = 'undefined id';
        const fetchedProduct = await fetchProductById(productId);
        expect(fetchedProduct).toBe(undefined);
    });

    it('Should calc total price correctly', async () => {
        const totalPrice = calcTotalPrice(products);
        expect(totalPrice).toBe(2280);
    });
});