import type { Access } from 'payload';

/** Public reads: published only. Logged-in admin sees drafts too. */
export const publishedOnlyRead: Access = ({ req }) => {
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
