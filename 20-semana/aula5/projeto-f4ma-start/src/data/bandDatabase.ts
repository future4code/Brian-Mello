import { BaseDatabase } from "./baseDatabase";
import { BandGateway } from "../business/gateways/band";
import { Band } from "../business/entities/band";

export class BandDatabase extends BaseDatabase implements BandGateway {
  private bandTableName: string = "bands";

  public fromDB(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.music_genre,
        dbModel.responsible
      )
    );
  }

  public async createBand(band: Band): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.bandTableName} (id, name, music_genre, responsible)
      VALUES(
        '${band.getId()}',
        '${band.getName()}',
        '${band.getMusicGenre()}',
        '${band.getResponsible()}'
      )
    `);
  }

  public async getBandById(id: string): Promise<Band | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE id = '${id}'
    `);

    return this.fromDB(result[0][0]);
  }

  public async getBandByName(name: string): Promise<Band | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE name LIKE '%${name}%'
    `);

    return this.fromDB(result[0][0]);
  }
}
