import {Request, Response, Router} from "express";
import {addressesRepository} from "../repositories/addresses-repository";

export const addressesRouter = Router({});

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addressesRepository.getProducts())
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addressesRepository.findAddressesById(+req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})