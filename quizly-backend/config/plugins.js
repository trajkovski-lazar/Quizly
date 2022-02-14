module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('078d76de87751e9bb849c66a1a584d03-cac494aa-06c33788'),
        // domain: env('sandboxd8298c80bbb84609809311a13e2f75f6.mailgun.org'), //Required if you have an account with multiple domains
        // host: env('MAILGUN_HOST', 'api.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'quizly-no-reply@test.com'
      },
    },
  },
});