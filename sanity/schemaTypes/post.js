export const post = {
  name: "post",
  title: "Blog Post",
  type: "document",

  fields: [
    // ================= TITLE =================
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Enter the main title of your article.",
      validation: (Rule) => Rule.required().min(10).max(120),
    },

    // ================= SLUG =================
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly version of your article title.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    },

    // ================= CATEGORY =================
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Choose the main topic of this article.",
      options: {
        list: [
          {
            title: "💻 Technology",
            value: "technology",
          },
          {
            title: "🎬 Movies",
            value: "movies",
          },
          {
            title: "🎮 Gaming",
            value: "gaming",
          },
          {
            title: "🤖 AI",
            value: "ai",
          },
          {
            title: "📱 Apps & Mobile",
            value: "apps-mobile",
          },
          {
            title: "⚽ Sports",
            value: "sports",
          },
          {
            title: "🌐 Internet",
            value: "internet",
          },
          {
            title: "🔥 Trending",
            value: "trending",
          },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },

    // ================= DESCRIPTION =================
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Short summary shown on the homepage and blog cards.",
      validation: (Rule) => Rule.required().min(30).max(300),
    },

    // ================= IMAGE =================
    {
      name: "image",
      title: "Featured Image",
      type: "image",
      description: "Main image displayed on the homepage and article page.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },

    // ================= CONTENT =================
    {
      name: "content",
      title: "Article Content",
      type: "array",
      description: "Write the complete article content here.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https"],
                      }),
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    // ================= PUBLISHED DATE =================
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description: "Date and time when the article was published.",
      initialValue: () => new Date().toISOString(),
    },
  ],

  // ================= PREVIEW =================
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },

    prepare({ title, subtitle, media }) {
      const categoryNames = {
        technology: "Technology",
        movies: "Movies",
        gaming: "Gaming",
        ai: "AI",
        "apps-mobile": "Apps & Mobile",
        sports: "Sports",
        internet: "Internet",
        trending: "Trending",
      };

      return {
        title: title || "Untitled Article",
        subtitle: categoryNames[subtitle] || "General",
        media,
      };
    },
  },
};

export default post;
