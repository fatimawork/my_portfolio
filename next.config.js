module.exports = {
    experimental: {
      outputFileTracingExcludes: {
        '*': [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
        ],
      },
    },
  };
  