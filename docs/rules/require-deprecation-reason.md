# `require-deprecation-reason`

✅ The `"extends": "plugin:@graphql-eslint/recommended"` property in a configuration file enables this rule.

- Category: `Best Practices`
- Rule name: `@graphql-eslint/require-deprecation-reason`
- Requires GraphQL Schema: `false` [ℹ️](../../README.md#extended-linting-rules-with-graphql-schema)
- Requires GraphQL Operations: `false` [ℹ️](../../README.md#extended-linting-rules-with-siblings-operations)

Require all deprecation directives to specify a reason.

## Usage Examples

### Incorrect

```graphql
# eslint @graphql-eslint/require-deprecation-reason: 'error'

type MyType {
  name: String @deprecated
}
```

### Incorrect

```graphql
# eslint @graphql-eslint/require-deprecation-reason: 'error'

type MyType {
  name: String @deprecated(reason: "")
}
```

### Correct

```graphql
# eslint @graphql-eslint/require-deprecation-reason: 'error'

type MyType {
  name: String @deprecated(reason: "no longer relevant, please use fullName field")
}
```