# gum-sdk-monorepo

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/gumhq/sdk.git
```

2. Install Lerna (if you haven't already):

```bash
npm install -g lerna
```

3. Install dependencies and link packages:

```bash
cd sdk
npx lerna bootstrap
```

4. Build the packages:

```bash
npx lerna run build
```

## Packages

| Name                                                                              | Description                                      | Version                                                                                                   |
| --------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [`@magicblock-labs/gum-sdk`](https://github.com/magicblock-labs/gum-sdk/tree/master/packages/gpl-core)        | Typescript client to interact with Gum protocol. | <p align="center"><img alt="npm" src="https://img.shields.io/npm/v/@magicblock-labs/gum-sdk?color=%23d45bff"></p>       |

## Documentation

- [Overview](https://docs.gum.fun/introduction/overview)
- [Getting Started Guide](https://docs.gum.fun/protocol-overview/quickstart)
- [FAQ](https://docs.gum.fun/introduction/faqs)

You can find the complete documentation for the Gum SDK at https://docs.magicblock.gg/Onboarding/Session%20Keys/introduction

## Gum Quickstart

The Gum Quickstart is an excellent starting point for developers aiming to leverage Gum in their Next.js applications. This ready-to-use template not only expedites the setup process, but also includes functional examples and components to facilitate the creation of domain profiles, posts, and more. Check out the [Gum Quickstart](https://github.com/gumhq/gum-quickstart) to get started.

## Example App

Check out the [example app](https://github.com/gumhq/gum-example-app) that uses the Gum SDK to demonstrate its capabilities. The app is a simple React app that showcases the creation of a domain, profile, and posts.

## Contributing

We welcome contributions to improve the SDK. Please raise an issue or submit a pull request with any suggestions or bug fixes.

## License

The Gum SDK is licensed under the [GNU General Public License v3.0](https://github.com/gumhq/sdk/blob/master/LICENSE).

## Support

Join our Discord community at [https://discord.com/invite/MBkdC3gxcv](https://discord.com/invite/MBkdC3gxcv) for any questions or support.
