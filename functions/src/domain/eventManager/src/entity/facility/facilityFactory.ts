import FacilityId from '../../valueObject/facilityId';
import Facility from './facility';

export default class FacilityFactory {
	constructor() {}

	public create(id: string) {
		return new Facility(new FacilityId(id));
	}
}
