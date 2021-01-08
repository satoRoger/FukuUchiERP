import DrafterId from '../../valueObject/drafterId';

export default class Drafter {
  constructor(private _id: DrafterId) {}

  public get id() {
    return this._id;
  }
}
