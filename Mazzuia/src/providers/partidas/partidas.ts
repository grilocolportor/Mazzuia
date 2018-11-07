import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/*
  Generated class for the PartidasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartidasProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {
  }

  public insert(partida: Partidas) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, partida);
  }

  public update(key: string, partida: Partidas) {
    return this.save(key, partida);
  }

  private save(key: string, partida: Partidas) {
    return this.storage.set(key, partida);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let partidas: PartidaList[] = [];

    return this.storage.forEach((value: Partidas, key: string, iterationNumber: Number) => {
      let partida = new PartidaList();
      partida.key = key;
      partida.partida = value;
      partidas.push(partida);
    })
      .then(() => {
        return Promise.resolve(partidas);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Partidas {
  nome: string;
  apelido: string;
  cidade: string;
  pais: string;
  image: string;
}

export class PartidaList {
  key: string;
  partida: Partidas;
}