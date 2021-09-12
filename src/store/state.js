export default {
  comments: [
    {
      id: 1,
      user_id: 1,
      avatar: "https://mundocontact.com/wp-content/uploads/2017/09/michael_sayman.png",
      name: "Albert Vilca",
      comment: "example",
      likes: 2,
      date: new Date(Date.now() - 86400000),
      children: [
        {
          id: 1,
          user_id: 1,
          avatar: "https://mundocontact.com/wp-content/uploads/2017/09/michael_sayman.png",
          name: "Albert Vilca",
          comment: "hijo uno",
          date: new Date(Date.now() - 86400000),
          likes: 0
        }
      ]
    },
    {
      id: 2,
      user_id: 2,
      avatar:
        "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605c4e3c8f72470001b1859b/picture",
      name: "Andre K",
      comment: "example",
      likes: 0,
      date: new Date(Date.now() - 86400000),
      children: []
    }
  ],
  user: {
    user_id: 1,
    avatar: "https://mundocontact.com/wp-content/uploads/2017/09/michael_sayman.png",
    name: "Albert Vilca"
  }
};
