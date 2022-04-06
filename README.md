# @netsells/nuxt-auth-v4

This package simply builds on the official `@nuxtjs/auth` module, and adds in runtime config functionality. 

**NOTE:** This package is for v4.x of `@nuxtjs/auth`, for v5.x please see [@netsells/nuxt-auth](https://www.npmjs.com/package/@netsells/nuxt-auth).

## Installation

```sh
$ yarn add @netsells/nuxt-auth-v4
```

## Usage

### Setup

Add the module to your nuxt config:

```js
module.exports = {
    modules: [
        '@netsells/nuxt-auth-v4',
    ],
};
```

### Runtime Config

You can then define your config in your `publicRuntimeConfig` and `privateRuntimeConfig` respectively. The config follows the same structure as the config you would provide to the module directly, but nested under the `auth` key. For example:

```js
module.exports = {
    publicRuntimeConfig: {
        auth: {
            strategies: {
                local: {
                    endpoints: {
                        login: {
                            url: `${ process.env.APP_URL }/api/auth/login`,
                        },
                    },
                },
            },
        },
    },
};
```

Any values in here will be merged with the config passed to the `@nuxtjs/auth` module.
