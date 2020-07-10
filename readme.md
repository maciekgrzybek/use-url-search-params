# useUrlSearchParams

## Why bother?
- simple API
- hooks that are responsible for single functionality
- uses browser API URLSearchParams, which makes it 
## Requirements

## Installation

Svelte Inview is distributed via [npm](https://www.npmjs.com/package/svelte-inview).

```sh
$ yarn add svelte-inview
# or
$ npm install --save svelte-inview
```

## Hooks that you can use
As mentioned before, this package uses [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) under the hood. The API is simple, yet very powerful. For ever simpler usage you can use these handy hooks.

### `useGetSearchParams`
Get the values for a specific search param.

```javascript
  // With single param in the search
  useGetSearchParam('?topic=api', 'topic') // Returns 'api'

  // With multiple params in the search
  useGetSearchParam('?topic=api&topic=not-an-api', 'topic') // Returns ['api', 'not-an-api']
```



|Name |Type   |Description   |   |   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

|Name  |Type   |Description   |Required  |
|search|`string`|| `true`|


## Tips
You can pass window.location search etc

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Maciek Grzybek - [@maciek_g88](https://twitter.com/maciek_g88) - maciekgrzybek1@gmail.com - [www.maciekgrzybek.dev](www.maciekgrzybek.dev)