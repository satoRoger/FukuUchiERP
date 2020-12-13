import { Container } from "inversify";
import dcontainer from "./inversifyDevelop.config";

let container: Container = new Container();
container = dcontainer;

export default container;
