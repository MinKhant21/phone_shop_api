export const searchByIdInteractor = async (
  { searchByIdPersistence }: any,
  id: string,
  module: string
) => {
  try {
    return await searchByIdPersistence(id, module);
  } catch (error) {
    console.log(error);
  }
};
