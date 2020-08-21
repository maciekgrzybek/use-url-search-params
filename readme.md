# useUrlSearchParams

Simple collection of hooks to manipulate the URL search params. This package uses [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) browser API under the hood. Package API is simple, yet very powerful. Check out the documentation below on how to use it.

## Why bother?

- simple API
- hooks that are responsible for single functionality
- uses browser API URLSearchParams

## Requirements

- React >= 16.8.x
- Node >= 10.x.x (if you need it for SSR)

## Installation

Just import a hook that you want to use.

```javascript
export { useAppendSearchParam } from 'use-url-search-params-hooks';
export { useExcludeSearchParam } from 'use-url-search-params-hooks';
export { useGetAllSearchParams } from 'use-url-search-params-hooks';
export { useGetSearchParam } from 'use-url-search-params-hooks';
export { useHasSearchParam } from 'use-url-search-params-hooks';
export { usePickSearchParam } from 'use-url-search-params-hooks';
export { useStringifySearchParam } from 'use-url-search-params-hooks';
```

## Usage

### `useGetSearchParams`

Returns the values for a specific search param.

```javascript
// With single param in the search
useGetSearchParam('?topic=api', 'topic'); // Returns 'api'

// With multiple params in the search
useGetSearchParam('?topic=api&topic=not-an-api', 'topic'); // Returns ['api', 'not-an-api']
```

| Name     | Type     | Description                | Required |
| -------- | -------- | -------------------------- | -------- |
| search   | `string` | Search params from the URL | `true`   |
| paramKey | `string` | Name of the param to get   | `true`   |

### `useGetAllSearchParams`

Returns all params. It can either be an object with key/value pairs or array with just keys or values.

```javascript
// Get object with key/value pairs
useGetAllSearchParams('?topic=api&technology=nodejs&level=junior');
// Returns {
//  topic: 'api',
//  technology: 'nodejs',
//  level: 'junior'
// }

// Get just an array of keys
useGetAllSearchParams('?topic=api&technology=nodejs&level=junior', {
  keysOnly: true,
}); // Returns ['topic', 'technology', 'level']

// Get just an array of keys
useGetAllSearchParams('?topic=api&technology=nodejs&level=junior', {
  valuesOnly: true,
}); // Returns ['api', 'nodejs', 'junior']
```

| Name               | Type      | Description                                     | Required |
| ------------------ | --------- | ----------------------------------------------- | -------- |
| search             | `string`  | Search params from the URL                      | `true`   |
| options.keysOnly   | `boolean` | If set to true, returns only an array of keys   | `false`  |
| options.valuesOnly | `boolean` | If set to true, returns only an array of values | `false`  |

### `useAppendSearchParam`

Appends additional search params. Returns updated params string.

```javascript
// Appends two params
useAppendSearchParam('?topic=api', {
  technology: 'nodejs',
  level: 'junior',
});
// Returns `topic=api&technology=nodejs&level=junior`
useAppendSearchParam(
  '?topic=api',
  { technology: ['javascript', 'nodejs', 'react'] },
  { arrayType: 'separator', separator: '|' }
);
// Returns `topic=api&technology=api|nodejs|react`

useAppendSearchParam(
  '?topic=api',
  { technology: ['javascript', 'nodejs', 'react'] },
  { arrayType: 'separator', separator: ',' }
);
// Returns `topic=api&technology=api,nodejs,react`

useAppendSearchParam(
  '?topic=api',
  { technology: ['javascript', 'nodejs', 'react'] },
  { arrayType: 'bracket' }
);
// Returns `topic=api&technology[]=api&technology[]=nodejs&technology[]=react`

useAppendSearchParam(
  '?topic=api',
  { technology: ['javascript', 'nodejs', 'react'] },
  { arrayType: 'indexedBracket' }
);
// Returns `topic=api&technology[0]=api&technology[1]=nodejs&technology[2]=react`
```

| Name   | Type     | Description                                         | Required |
| ------ | -------- | --------------------------------------------------- | -------- |
| search | `string` | Search params from the URL                          | `true`   |
| params | `object` | Key/value pairs of params that needs to be appended | `true`   |

### `useExcludeSearchParam`

Removes search params from the url. Returns updated params string.

```javascript
// Removes single param
useExcludeSearchParam('?topic=api&technology=nodejs', 'technology');
// Returns `topic=api`

// Removes multiple params
useExcludeSearchParam('?topic=api&technology=nodejs&level=junior', [
  'topic',
  'technology',
]);
// Returns `level=junior`
```

| Name   | Type                     | Description                            | Required |
| ------ | ------------------------ | -------------------------------------- | -------- |
| search | `string`                 | Search params from the URL             | `true`   |
| params | `string | array<string>` | Param or array of params to be removed | `true`   |

### `useHasSearchParam`

Checks if param exists.

```javascript
useHasSearchParam('?topic=api&technology=nodejs&level=junior', 'topic');
// Returns true

useHasSearchParam('?topic=api&level=junior', 'technology');
// Returns false
```

| Name   | Type     | Description                           | Required |
| ------ | -------- | ------------------------------------- | -------- |
| search | `string` | Search params from the URL            | `true`   |
| params | `string` | Param that existence is to be checked | `true`   |

### `usePickSearchParam`

Picks which param(s) needs to remain and removes other ones.

```javascript
// Picks only topic param
usePickSearchParam('?topic=api&technology=nodejs&level=junior', 'topic');
// Returns `topic=api`

// Picks two params param
usePickSearchParam('?topic=api&technology=nodejs&level=junior', [
  'topic',
  'level',
]);
// Returns `topic=api&level=junior`
```

| Name   | Type                     | Description                        | Required |
| ------ | ------------------------ | ---------------------------------- | -------- |
| search | `string`                 | Search params from the URL         | `true`   |
| params | `string | array<string>` | Param or array of params to remain | `true`   |

### `useStringifySearchParam`

Creates a search param string, based on provided object.

```javascript
useStringifySearchParam({ topic: 'api', technology: 'nodejs' });
// Returns `topic=api&technology=nodejs`
```

An array can also be passed as a value of the param. There are few options to do that.

```javascript
useStringifySearchParam(
  { topic: ['api', 'nodejs', 'react'] },
  { arrayType: 'separator', separator: '|' }
);
// Returns `topic=api|nodejs|react`

useStringifySearchParam(
  { topic: ['api', 'nodejs', 'react'] },
  { arrayType: 'separator', separator: ',' }
);
// Returns `topic=api,nodejs,react`

useStringifySearchParam(
  { topic: ['api', 'nodejs', 'react'] },
  { arrayType: 'bracket' }
);
// Returns `topic[]=api&topic[]=nodejs&topic[]=react`

useStringifySearchParam(
  { topic: ['api', 'nodejs', 'react'] },
  { arrayType: 'indexedBracket' }
);
// Returns `topic[0]=api&topic[1]=nodejs&topic[2]=react`
```

| Name              | Type                                         | Description                                                                                                      | Required |
| ----------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| params            | `object<string, string|array>`               | Object with params to stringify                                                                                  | `true`   |
| options.arrayType | `'separator' | 'bracket' | 'indexedBracket'` | Defines how array should be parsed                                                                               | `false`  |
| options.separator | `string`                                     | Defines what kind of separator will be used in array. Use with care as not all characters will work with the URL | `false`  |

## Tips

- to get the params from your url, you can use:
  - in most cases -> `window.location.search`
  - with React Router -> `this.props.location.search` or `props.location.search`
  - with Reach Router -> `import { useLocation } from "@reach/router"` and then `const { search } = useLocation()`
- notice that hooks that returns the search string, will return it without the question mark i.e. `topic=api&technology=nodejs`, it's because assigning new string to `location.search` will add it automatically `location.search = topic=api&technology=nodejs -> ?topic=api&technology=nodejs`

## Browser support

- all major desktop and mobile browsers apart from Internet Explorer (there's no plan for supporting it)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Maciek Grzybek - [@maciek_g88](https://twitter.com/maciek_g88) - maciekgrzybek1@gmail.com - [www.maciekgrzybek.dev](www.maciekgrzybek.dev)
