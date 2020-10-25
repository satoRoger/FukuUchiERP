import ServerSetting from "../serverSetting";
export default interface WebServer {
  listen(port: number, hostname: string): void;
}
