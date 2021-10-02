# `require-description`

- Category: `Best Practices`
- Rule name: `@graphql-eslint/require-description`
- Requires GraphQL Schema: `false` [ℹ️](../../README.md#extended-linting-rules-with-graphql-schema)
- Requires GraphQL Operations: `false` [ℹ️](../../README.md#extended-linting-rules-with-siblings-operations)

Enforce descriptions in your type definitions.

## Usage Examples

### Incorrect

```graphql
# eslint @graphql-eslint/require-description: ['error', { types: true, overrides: { FieldDefinition: true } }]

type someTypeName {
  name: String
}
```

### Correct

```graphql
# eslint @graphql-eslint/require-description: ['error', { types: true, overrides: { FieldDefinition: true } }]

"""
Some type description
"""
type someTypeName {
  """
  Name description
  """
  name: String
}
```

## Config Schema

### (array)

The schema defines an array with all elements of the type `object`.

The array object has the following properties:

#### `types` (boolean)

Includes:

- `ObjectTypeDefinition`
- `InterfaceTypeDefinition`
- `EnumTypeDefinition`
- `ScalarTypeDefinition`
- `InputObjectTypeDefinition`
- `UnionTypeDefinition`

#### `overrides` (object)

Configuration for precise `ASTNode`

Properties of the `overrides` object:

##### `ObjectTypeDefinition` (boolean)

##### `InterfaceTypeDefinition` (boolean)

##### `EnumTypeDefinition` (boolean)

##### `ScalarTypeDefinition` (boolean)

##### `InputObjectTypeDefinition` (boolean)

##### `UnionTypeDefinition` (boolean)

##### `FieldDefinition` (boolean)

##### `InputValueDefinition` (boolean)

##### `EnumValueDefinition` (boolean)

##### `DirectiveDefinition` (boolean)

Additional restrictions:

* Minimum items: `1`