import React from "react";
import { shallow } from "enzyme";
import ProductItem from "../../components/products/ProductItem";
import { products } from "../../services/products";
import ProductItemSheet from "../../components/products/ProductItemSheet";

describe('ProductItem rendering', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<ProductItem product={products[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ProductItemSheet rendering', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<ProductItemSheet product={products[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});