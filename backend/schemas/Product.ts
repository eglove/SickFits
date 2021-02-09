import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const Product = list({
  // TODO
  // access
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
  },
});
