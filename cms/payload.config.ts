import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { Products } from "./collections/Products";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET as string,

  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",

  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),

  collections: [
    Products,
  ],
});