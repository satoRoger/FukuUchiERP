import { injectable } from "inversify";
import Person from "../../../domain/resourceManager/src/entity/person/person";
import PersonCollection from "../../../domain/resourceManager/src/entity/person/personCollection";
import PersonRepository from "../../../domain/resourceManager/src/repository/personRepostitory";
import admin from "../../../framework/firebase/adminInitialize";

@injectable()
export default class UsersRepositoryFS implements PersonRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("users");
  }

  async save(person: Person): Promise<Person> {
    const savePerson = person;
    for (let [i, v] of Object.entries(person)) {
      if (typeof v === "undefined") {
        savePerson[i] = null;
      }
    }
    await this.repository.add({});
    return person;
  }
  search(): Promise<PersonCollection> {
    throw new Error("Method not implemented.");
  }
}
