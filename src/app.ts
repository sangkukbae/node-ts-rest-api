import express from 'express';
import bodyParser from 'body-parser';
import { Pokemons } from './routes/pokemons';

class App {
  public app: express.Application;
  public pokemons: Pokemons = new Pokemons();

  constructor() {
    this.app = express();
    this.config();
    this.pokemons.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }
}

export default new App().app;