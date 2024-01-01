
export const searchByIdInteractor =  async ({searchByIdPersistence} : any,id:string,module:string) => {
    await searchByIdPersistence(id,module)
}