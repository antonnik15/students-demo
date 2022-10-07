const addresses = [{id: 1, title: 'Nezaleznaya 21'}, {id: 2, title: 'Selickaga 21'}];

export const addressesRepository = {
    getProducts() {
        return addresses;
    },
    findAddressesById(id: number) {
        return addresses.find(a => a.id === id)
    }

}
