import { DeleteBeerRepository } from "../../protocols/delete-beer-repository";
import { DbDeleteBeer } from "./delete-beer";

const makeDeleteBeerRepository = (): DeleteBeerRepository => {
  class DeleteBeerRepositoryStub implements DeleteBeerRepository {
    delete(name: string): Promise<boolean> {
      return new Promise(resolve => resolve(true));
    }
  }

  return new DeleteBeerRepositoryStub();
}

interface SutTypes {
  sut: DbDeleteBeer
  deleteBeerRepositoryStub: DeleteBeerRepository
}

const makeSut = (): SutTypes => {
  const deleteBeerRepositoryStub = makeDeleteBeerRepository();
  const sut = new DbDeleteBeer(deleteBeerRepositoryStub);

  return {
    sut,
    deleteBeerRepositoryStub
  }
}

describe("DbDeleteBeer", () => {
  it("Should call DeleteBeerRepository with correct values", async () => {
    const { sut, deleteBeerRepositoryStub } = makeSut();
    const name = "Original";
    
    const DeleteSpy = jest.spyOn(deleteBeerRepositoryStub, "delete");
    await sut.delete(name);

    expect(DeleteSpy).toHaveBeenCalledWith(name);
  })

  it("Should throw if DeleteBeerRepository throws", async () => {
    const { sut, deleteBeerRepositoryStub } = makeSut();
    const name = "Beck's"

    jest.spyOn(deleteBeerRepositoryStub, "delete").mockImplementationOnce(() => {
      throw new Error();
    })
    const promise = sut.delete(name);

    expect(promise).rejects.toThrow();
  })
})