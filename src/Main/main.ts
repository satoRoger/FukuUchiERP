import "reflect-metadata";
import SearchTimecard from "@/usecase/timecard/searchTimecard";
import Types from "../di/types";
import container from "../di/inversify.config";

const searchTimecard: SearchTimecard = container.get<SearchTimecard>(
  Types.SearchTimecard
);
