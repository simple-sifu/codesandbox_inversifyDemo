import { injectable, inject } from "inversify";
import TYPES from "./Dependencies/Types";
import IDependency from "./Dependencies/IDependency";

@injectable()
export default class AppRepository {
  @inject(TYPES.IDependency)
  dependency: IDependency;

  load() {
    return this.dependency.message();
  }
}
