import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "price", "category", "inStock"],
  },
  access: {
    read: () => true, // Public access for storefront fetching
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Essentials", value: "essentials" },
        { label: "Archive", value: "archive" },
        { label: "Limited", value: "limited" },
      ],
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media", // This requires a 'media' collection
      required: true,
      hasMany: true, // For product galleries
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: 'sidebar', // Keeps the UI clean
        description: "URL-friendly identifier",
      },
    },
    {
      name: "inStock",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: 'sidebar',
      }
    },
  ],
};