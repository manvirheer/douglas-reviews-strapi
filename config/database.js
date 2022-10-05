module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.bit.io'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'manvirheer/douglas-reviews-db'),
      user: env('DATABASE_USERNAME', 'manvirheer'),
      password: env('DATABASE_PASSWORD', 'v2_3ub2Y_7nZ7RFmz6KjkQjA8qmXXgvH'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
