import { Injector, Logger } from "replugged";
export const PluginLogger = Logger.plugin("AtSomeone");
export const PluginInjector = new Injector();
import applyInjections from "./patches/index";
export const start = (): void => {
  PluginLogger.log("It's not a joke if its a feature.");
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
