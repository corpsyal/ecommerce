import React from "react";
import { shallow } from "enzyme";
import ProductItem from "../../components/products/product-item";
import { products } from "../../services/products";

describe('ProductItem rendering', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<ProductItem product={products[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});