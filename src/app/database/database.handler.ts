import { COUNTRIES } from './countries';

export class DatabaseHandler {
  getRandomCountry() {
    return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  }
}
