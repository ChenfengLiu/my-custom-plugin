import { Session } from "meteor/session";
import { Template } from "meteor/templating";
import { Logger } from "/client/api";

Session.set("INDEX_OPTIONS", {
  template: "productsLandingIndex"
});

Template.layoutHeaderHydrotik.replaces("layoutHeader");
