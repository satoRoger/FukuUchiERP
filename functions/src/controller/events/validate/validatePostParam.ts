import EventsPostParam from '../../../interactor/InteractorObject/events/eventsPostParam';
export default class ValidateEventsPostParam {
  createWithValid(): EventsPostParam {
    return new EventsPostParam();
  }
}
