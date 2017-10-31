import { Reaction } from "/server/api";

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "My Custom Plugin",
  name: "my-custom-plugin",
  icon: "fa fa-weibo",
  meta: {
    version: "1.0.0"
  },
  autoEnable: true,
  registry: [
    {
      route: "/shop",
      name: "shop",
      template: "productsLanding",
      workflow: "coreWorkflow"
    }
  ],
  layout: [{
    layout: "coreLayoutMyCustom",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    priority: 1,
    structure: {
      template: "productsLanding",
      layoutHeader: "layoutHeader",
      layoutFooter: "layoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
