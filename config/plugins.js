const crypto = require('crypto');

module.exports = ({env}) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
  },
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      contentTypeFilter: {
        mode: 'allow',
        uids: {
          'api::word.word': true,
          'api::category.category': true,
        }
      },
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
        },
        region: env('AWS_REGION'),
        endpoint: env('AWS_ENDPOINT'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
});
