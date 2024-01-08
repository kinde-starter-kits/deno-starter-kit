# Kinde Starter Kit - Deno

The Kinde Starter Kit for using the TypeScript SDK with Deno Fresh.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com) [![Kinde Docs](https://img.shields.io/badge/Kinde-Docs-eee?style=flat-square)](https://kinde.com/docs/developer-tools) [![Kinde Community](https://img.shields.io/badge/Kinde-Community-eee?style=flat-square)](https://thekindecommunity.slack.com)

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Development

### Initial set up

1. Clone the repository to your machine:

   ```bash
   git clone https://github.com/kinde-starter-kits/deno-starter-kit
   ```

### Setup your local environment

Create `.env` file. Set the following variables with the details from the Kinde App Keys page

```bash
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_AUTH_DOMAIN=https://your_kinde_domain.kinde.com
KINDE_LOGOUT_REDIRECT_URL=http://localhost:8000
KINDE_REDIRECT_URL=http://localhost:8000/callback
APP_KEY=randomly_regenerated_encryption_key
```

For example

```bash
KINDE_CLIENT_ID=abcdef1234567890abcdef1234567890
KINDE_CLIENT_SECRET=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
KINDE_AUTH_DOMAIN=https://example.kinde.com
KINDE_LOGOUT_REDIRECT_URL=http://localhost:8000
KINDE_REDIRECT_URL=http://localhost:8000/callback
APP_KEY=aAbBcCdDeEfF1234567890_random!!!
```

### Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the App Keys page set `Allowed callback URLs` to <http://localhost:8000/callback>

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the `Allowed logout redirect URLs` to <http://localhost:8000>.

### Start the app

Run `deno task start` and navigate to <http://localhost:8000>.

Click on `Sign up` and register your first user for your business!

## View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there. 🚀

## Contributing

Please refer to Kinde’s [contributing guidelines](https://github.com/kinde-oss/.github/blob/489e2ca9c3307c2b2e098a885e22f2239116394a/CONTRIBUTING.md).

## License

By contributing to Kinde, you agree that your contributions will be licensed under its MIT License.
