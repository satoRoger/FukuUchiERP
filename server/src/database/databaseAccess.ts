import QueryResult from "./queryResult";
import QueryCommand from "./quryCommand";

export default interface DatabaseAccess {
  query: (queryCommand: QueryCommand) => QueryResult
}
