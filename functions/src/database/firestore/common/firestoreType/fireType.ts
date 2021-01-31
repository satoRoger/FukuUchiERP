export default interface FireType {
  toFireStore():
    | Date
    | number
    | null
    | any[]
    | string
    | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
}
