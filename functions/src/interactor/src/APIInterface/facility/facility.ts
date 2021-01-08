import Facility from '../../../../domain/resourceManager/src/entity/facility/facility';
import { isString } from '../../../../util/isType/isType';

export default class FacilityAPIInterface {
	readonly id: string;
	readonly name: string;

	static fromDomainFacility(facility: Facility) {
		return new FacilityAPIInterface(facility.id, facility.name);
	}

	constructor(id: any, name: any) {
		if (isString(id)) {
			this.id = id;
		} else {
			throw '';
		}
		if (isString(name)) {
			this.name = name;
		} else {
			throw '';
		}
	}
}
