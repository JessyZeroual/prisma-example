const Mutation = {
  createDraft(root, args, context) {
    return context.prisma.createPost({
      title: args.title,
      author: {
        connect: { id: args.userId },
      },
    });
  },
  publish(root, args, context) {
    return context.prisma.updatePost({
      where: { id: args.postId },
      data: { published: true },
    });
  },
  createUser(root, args, context) {
    return context.prisma.createUser({ name: args.name });
  },
  createItem(root, args, context) {
    if (args.title.trim().length < 3) return;

    return context.prisma.createItem({ title: args.title });
  },
  deleteItem(root, args, context) {
    return context.prisma.deleteItem({ id: args.id });
  },
};

module.exports = { Mutation };
