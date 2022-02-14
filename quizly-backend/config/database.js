module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'quizly'),
        username: env('DATABASE_USERNAME', 'quizly'),
        password: env('DATABASE_PASSWORD', 'data123'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'quizly'),
        ssl: env('DATABASE_SSL'),
      },
    },
  },
});