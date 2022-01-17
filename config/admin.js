module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0922e860a6a3beba94de8924fd2f3f7'),
  },
});
