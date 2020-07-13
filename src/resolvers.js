import { Lead } from "./models/Lead";

export const resolvers = {
  Query: {
    leads: () => Lead.find(),
  },
  Mutation: {
    createLead: async (_, { businessName }) => {
      const lead = new Lead({ businessName });
      await lead.save();
      return lead;
    },
  },
};
