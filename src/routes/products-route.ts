import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";

export const productsRoute = Router({})

productsRoute.get('/:id', (req: Request, res: Response) => {
    let findProduct = productsRepository.findProductById(+req.params.id)
    res.send(findProduct)
})
productsRoute.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})
productsRoute.get('/', (req: Request, res: Response) => {
    let foundProduct = productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProduct)
 })
productsRoute.post('/', (req: Request, res: Response) => {
    if (req.body.title){
        let newProduct = productsRepository.createProduct(req.body.title)
        res.status(201).send(newProduct)
    } else {
        res.sendStatus(404)
    }
})
productsRoute.put('/:id', (req:Request, res: Response) => {
    let isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpdated) {
        res.status(200).send(productsRepository.findProducts(req.body.title));
    } else {
        res.sendStatus(404);
    }
})
