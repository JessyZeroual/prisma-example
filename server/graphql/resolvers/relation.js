const Relation = {
  User: {
    posts(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        })
        .posts();
    },
  },
  Post: {
    author(root, args, context) {
      return context.prisma
        .post({
          id: root.id,
        })
        .author();
    },
  },
};

module.exports = { Relation };
