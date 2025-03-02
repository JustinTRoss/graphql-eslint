import { GraphQLRuleTester } from '../src/testkit';
import rule from '../src/rules/description-style';

const ruleTester = new GraphQLRuleTester();

const INLINE_SDL = /* GraphQL */ `
  " Test "
  type CreateOneUserPayload {
    "Created document ID"
    recordId: MongoID

    "Created document"
    record: User
  }
`;

export const BLOCK_SDL = /* GraphQL */ `
  enum EnumUserLanguagesSkill {
    """
    basic
    """
    basic
    """
    fluent
    """
    fluent
    """
    native
    """
    native
  }
`;

ruleTester.runGraphQLTests('description-style', rule, {
  valid: [
    {
      code: BLOCK_SDL,
      options: [{ style: 'block' }],
    },
    INLINE_SDL,
  ],
  invalid: [
    {
      code: BLOCK_SDL,
      errors: 3,
    },
    {
      code: INLINE_SDL,
      options: [{ style: 'block' }],
      errors: 3,
    },
  ],
});
