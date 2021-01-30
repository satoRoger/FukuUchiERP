import { injectable } from "inversify";
import Facility from "../../../domain/resourceManager/src/entity/facility/facility";
import FacilityCollection from "../../../domain/resourceManager/src/entity/facility/facilityCollection";
import FacilityRepository from "../../../domain/resourceManager/src/repository/facilityRepository";
import admin from "../../../framework/firebase/adminInitialize";
import FacilityId from "../../../domain/resourceManager/src/valueObject/facilityId";
import CollectionName from "../common/collectionName";
import FireFacilitiesModel from "./facilitiesRepositoryModel/facilitiesModel";
import FireFacilitiesSearch from "./facilitiesSearch";
import DocToDomainFacility from "./docToDomainFacility";

@injectable()
export default class FacilityRepositoryFS implements FacilityRepository {
  private database;
  private repository;
  constructor() {
    this.database = admin.firestore();
    this.repository = this.database.collection(CollectionName.facilities);
  }

  async add(facility: Facility): Promise<Facility> {
    const facilityModel = new FireFacilitiesModel(
      this.database,
      facility.name.value
    );
    await this.repository.add(facilityModel.toFirebaseStoreFormat());
    return facility;
  }

  async save(facility: Facility): Promise<Facility> {
    const facilityModel = new FireFacilitiesModel(
      this.database,
      facility.name.value
    );
    await this.repository
      .doc(facility.id.value)
      .set(facilityModel.toFirebaseStoreFormat());

    return facility;
  }

  async search(): Promise<FacilityCollection> {
    const queryRepository = new FireFacilitiesSearch(
      this.database
    ).searchRepository();

    const documents = (await this.repository.get()).docs;

    const facilities = documents.map((document) =>
      new DocToDomainFacility(document).toDomain()
    );

    return Promise.all(facilities).then((facilities) => {
      const collection = new FacilityCollection();
      for (let facility of facilities) {
        collection.add(facility);
      }
      return collection;
    });
  }

  async remove(facilityId: FacilityId): Promise<FacilityId> {
    await this.repository.doc(facilityId.value).delete();
    return facilityId;
  }
}
