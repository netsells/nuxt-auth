# @netsells/nuxt-auth

This package simply builds on the official `@nuxtjs/auth` module, and adds in runtime config functionality. 

## Installation

```sh
$ yarn add -D @netsells/nuxt-auth
```

## Usage

### Setup

Add the module to your nuxt config:

```js
module.exports = {
    modules: [
        '@netsells/nuxt-auth',
    ],
};
```

### Runtime Config

You can then define your config in your `publicRuntimeConfig` and `privateRuntimeConfig` respectively. The config follows the same structure as the config you would provide to the module directly, but nested under the `auth` key. For example:

```js
module.exports = {
    publicRuntimeConfig: {
        auth: {
            local: {
                endpoints: {
                    login: {
                        url: `${ process.env.APP_URL }/api/auth/login`,
                    },
                },
            },
        },
    },
};
```

Any values in here will be merged with the config passed to the `@nuxtjs/auth` module.
