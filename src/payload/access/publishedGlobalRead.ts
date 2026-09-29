import type { Access } from 'payload';

/** Same as publishedOnlyRead for globals with drafts enabled. */
export const publishedGlobalRead: Access = ({ req }) => {
  if (req.user) {
    return true;
  }

  return {
    or: [
      {
        _status: {
          equals: 'published',
        },
      },
      {
        _status: {
          exists: false,
        },
      },
    ],
  };
};
