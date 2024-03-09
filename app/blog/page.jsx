import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getBlogMetadata from "@/components/blog/meta-data";
import BlogHeader from "@/components/blog/header";
import Navbar2024 from "@/components/2024/layout/navbar";
import Footer from "@/components/2023/layout/footer";

const getBlogContent = (slug) => {
  const folder = "content/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getBlogMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = "test";
  const post = getBlogContent(slug);
  return (
    <div className="bg-wheat">
        <h2 className="text-red-700">tejstr</h2>
      {/* <Navbar2024 /> */}
      <BlogHeader
        title={post?.data?.title}
        subtitle={post?.data?.author}
        date={post?.data?.date}
      />
      <div className="text-center py-8 px-5">
        <div className="flex justify-center">
          <article className="text-justify prose max-w-5xl">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PostPage;
