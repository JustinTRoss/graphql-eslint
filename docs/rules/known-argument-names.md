# `known-argument-names`

✅ The `"extends": "plugin:@graphql-eslint/recommended"` property in a configuration file enables this rule.

- Category: `Validation`
- Rule name: `@graphql-eslint/known-argument-names`
- Requires GraphQL Schema: `true` [ℹ️](../../README.md#extended-linting-rules-with-graphql-schema)
- Requires GraphQL Operations: `false` [ℹ️](../../README.md#extended-linting-rules-with-siblings-operations)

A GraphQL field is only valid if all supplied arguments are defined by that field.

> This rule is a wrapper around a `graphql-js` validation function. [You can find its source code here](https://github.com/graphql/graphql-js/blob/main/src/validation/rules/KnownArgumentNamesRule.ts).