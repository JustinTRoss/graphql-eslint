# `selection-set-depth`

- Category: `Best Practices`
- Rule name: `@graphql-eslint/selection-set-depth`
- Requires GraphQL Schema: `false` [ℹ️](../../README.md#extended-linting-rules-with-graphql-schema)
- Requires GraphQL Operations: `true` [ℹ️](../../README.md#extended-linting-rules-with-siblings-operations)

Limit the complexity of the GraphQL operations solely by their depth. Based on [graphql-depth-limit](https://github.com/stems/graphql-depth-limit).

## Usage Examples

### Incorrect

```graphql
# eslint @graphql-eslint/selection-set-depth: ['error', { maxDepth: 1 }]

query deep2 {
  viewer { # Level 0
    albums { # Level 1
      title # Level 2
    }
  }
}
```

### Correct

```graphql
# eslint @graphql-eslint/selection-set-depth: ['error', { maxDepth: 4 }]

query deep2 {
  viewer { # Level 0
    albums { # Level 1
      title # Level 2
    }
  }
}
```

### Correct (ignored field)

```graphql
# eslint @graphql-eslint/selection-set-depth: ['error', { maxDepth: 1, ignore: ['albums'] }]

query deep2 {
  viewer { # Level 0
    albums { # Level 1
      title # Level 2
    }
  }
}
```

## Config Schema

The schema defines the following properties:

### `maxDepth` (number)

### `ignore` (array)

The object is an array with all elements of the type `string`.