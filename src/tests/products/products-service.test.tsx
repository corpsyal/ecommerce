import { products, fetchProducts, fetchProductById } from "../../services/products";

describe('Products service', () => {
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
});