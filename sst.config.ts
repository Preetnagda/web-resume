/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "web-resume",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.StaticSite("Web", {
      domain: {
        name: "preetnagda.com",
        redirects: ["www.preetnagda.com"]
      },
      build: {
        command: "npm run build",
        output: "build",
      },
    });
  },
});