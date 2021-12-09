module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8528bfc71736a6a65f7c74f2bee68bd2'),
  },
});
