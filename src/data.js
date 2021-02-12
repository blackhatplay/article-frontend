const data = {
  time: 1550476186479,
  blocks: [
    {
      type: "header",
      data: {
        text: 'This is Post <mark class="cdx-marker">Content</mark>!!',
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      },
    },
    {
      type: "paragraph",
      data: {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <a href="https://loremipsum.io/">dolore </a>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <i>aliquip </i>ex ea commodo consequat. Duis aute irure dolor in <b>reprehenderit </b>in voluptate velit esse cillum dolore eu fugiat <code class="inline-code">nulla </code>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    },
    {
      type: "image",
      data: {
        file: {
          url:
            "https://firebasestorage.googleapis.com/v0/b/articles-c8ae7.appspot.com/o/images%2F314827-1613142039342.jpg?alt=media",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      type: "quote",
      data: {
        text:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        caption: "",
        alignment: "left",
      },
    },
    {
      type: "header",
      data: {
        text:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        level: 2,
      },
    },
  ],
  version: "2.8.1",
};

export default data;
