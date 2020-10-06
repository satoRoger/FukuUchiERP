import { Container } from "inversify";

import RepositoryOnMemory from "infrastructure/repository/repositoryOnMemory"

const container = new Container();
container.bind<attendance.TimecardRepository>("TimecardRepository").to(RepositoryOnMemory);


export default container;
