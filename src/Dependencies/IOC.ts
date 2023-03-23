import "reflect-metadata";
import TYPES from "./Types";
import IDependency from "./IDependency";
import FakeDependency from "./FakeDependency";
import RealDependency from "./RealDependency";
import { Container } from "inversify";

let container = null;

const createContainer = (context) => {
  container = new Container({
    autoBindInjectable: true,
    defaultScope: "Transient"
  });

  if (context === "real") {
    container.bind<IDependency>(TYPES.IDependency).to(RealDependency);
  } else if (context === "fake") {
    container.bind<IDependency>(TYPES.IDependency).to(FakeDependency);
  }
};

export { container, createContainer };
