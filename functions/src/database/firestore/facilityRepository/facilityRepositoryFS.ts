import { injectable } from "inversify";
import Facility from "../../../domain/resourceManager/src/entity/facility/facility";
import FacilityCollection from "../../../domain/resourceManager/src/entity/facility/facilityCollection";
import FacilityRepository from "../../../domain/resourceManager/src/repository/facilityRepository";
import admin from "../../../framework/firebase/adminInitialize";
import FacilityFactory from "../../../domain/resourceManager/src/entity/facility/facilityFactory";

@injectable()
export default class FacilityRepositoryFS implements FacilityRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection("facilities");
  }
  async save(facility: Facility): Promise<Facility> {
    await this.repository.add({ id: facility.id.value, name: facility.name?.value });
    return facility;
  }
  async search(): Promise<FacilityCollection> {
    const snapshot = await this.repository.get();

    const result = snapshot.docs.map(async (doc) => {
      const data = doc.data();

      return new FacilityFactory().create(doc.id, data.name);
    });

    return Promise.all(result).then((facilities) => {
      const collection = new FacilityCollection();
      for (let facility of facilities) {
        collection.add(facility);
      }
      return collection;
    });
  }
}
