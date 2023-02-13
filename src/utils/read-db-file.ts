import { readFile } from "fs/promises";
import path from "path";
import { AddBeerData } from "../domain/useCases/add-beer";

export const readDbFile = async (): Promise<AddBeerData[]> => {
  try {
    const file = path.resolve("db.json");

    const data = await readFile(file, { encoding: "utf-8" });

    return JSON.parse(data);
  } catch (error) {
    console.error(error)
  }
}
