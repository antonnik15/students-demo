import {privateDecrypt} from "crypto";
import {productsRoute} from "../routes/products-route";

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRepository = {
    findProducts(title: string | null | undefined) {
        if (title) {
            return products.filter(p => p.title.indexOf(title) > -1)
        } else {
            return products;
        }
    },
    createProduct(title: string) {
        let newProduct = {
            id: +(new Date()),
            title: title
        }
        products.push(newProduct)
        return newProduct;
    },
    findProductById(id: number) {
        let product = products.find(p => p.id === id)
        if (product) {
            return product;
        } else {
            return 404;
        }
    },
    updateProduct(id: number, title: string) {
        let product = products.find(p => p.id === id)
        if (product) {
            product.title = title;
            return true;
        } else {
            return false;
        }
    },
    deleteProduct(id: number) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1)
                return true;
            } else {
                return false;
            }
        }
    }
}