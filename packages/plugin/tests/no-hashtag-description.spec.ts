import { GraphQLRuleTester } from '../src';
import rule from '../src/rules/no-hashtag-description';

const ruleTester = new GraphQLRuleTester();

ruleTester.runGraphQLTests('no-hashtag-description', rule, {
  valid: [
    /* GraphQL */ `
      " Good "
      type Query {
        foo: String
      }
    `,
    /* GraphQL */ `
      # Good

      type Query {
        foo: String
      }
      # Good
    `,
    /* GraphQL */ `
      #import t

      type Query {
        foo: String
      }
    `,
    /* GraphQL */ `
      # multiline
      # multiline
      # multiline

      type Query {
        foo: String
      }
    `,
    /* GraphQL */ `
      type Query { # Good
        foo: String # Good
      } # Good
    `,
    /* GraphQL */ `
      # eslint-disable-next-line
      type Query {
        foo: String
      }
    `,
    /* GraphQL */ `
      type Query {
        # Good

        foo: ID
      }
    `,
    /* GraphQL */ `
      type Query {
        foo: ID
        # Good

        bar: ID
      }
    `,
    /* GraphQL */ `
      type Query {
        user(
          # Good

          id: Int
        ): User
      }
    `,
  ],
  invalid: [
    {
      code: /* GraphQL */ `
        # Bad
        type Query {
          foo: String
        }
      `,
      errors: [{ messageId: 'HASHTAG_COMMENT' }],
    },
    {
      code: /* GraphQL */ `
        # multiline
        # multiline
        type Query {
          foo: String
        }
      `,
      errors: [{ messageId: 'HASHTAG_COMMENT' }],
    },
    {
      code: /* GraphQL */ `
        type Query {
          # Bad
          foo: String
        }
      `,
      errors: [{ messageId: 'HASHTAG_COMMENT' }],
    },
    {
      code: /* GraphQL */ `
        type Query {
          bar: ID
          # Bad
          foo: ID
          # Good
        }
      `,
      errors: [{ messageId: 'HASHTAG_COMMENT' }],
    },
    {
      code: /* GraphQL */ `
        type Query {
          user(
            # Bad
            id: Int!
          ): User
        }
      `,
      errors: [{ messageId: 'HASHTAG_COMMENT' }],
    },
  ],
});
