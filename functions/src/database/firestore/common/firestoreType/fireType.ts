export default interface FireType {
  toFireStore():
    | Date
    | number
    | null
    | string
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
}
