import express from "express";
import beersRoute from "./routes/Beers.route";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/beers", beersRoute);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () =>
      console.log(`Server is running on PORT: ${PORT}`)
    );
  }
}

export { App };

export const { app } = new App();
