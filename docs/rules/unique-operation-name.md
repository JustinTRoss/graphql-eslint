# `unique-operation-name`

- Category: `Best Practices`
- Rule name: `@graphql-eslint/unique-operation-name`
- Requires GraphQL Schema: `false` [ℹ️](../../README.md#extended-linting-rules-with-graphql-schema)
- Requires GraphQL Operations: `true` [ℹ️](../../README.md#extended-linting-rules-with-siblings-operations)

Enforce unique operation names across your project.

## Usage Examples

### Incorrect

```graphql
# eslint @graphql-eslint/unique-operation-name: 'error'

# foo.query.graphql
query user {
  user {
    id
  }
}

# bar.query.graphql
query user {
  me {
    id
  }
}
```

### Correct

```graphql
# eslint @graphql-eslint/unique-operation-name: 'error'

# foo.query.graphql
query user {
  user {
    id
  }
}

# bar.query.graphql
query me {
  me {
    id
  }
}
```