import Link from "next/link";
import { BlogMetadata } from "./blog-metadata";
import { Card } from "./ui/card";

const BlogPreview = (props) => {
  return (
    <Card className="h-[330px] p-6">
      <p className="text-sm text-gray-400">Blog Post</p>
      <div className=" flex flex-col justify-evenly w-full h-full">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Posted on {props.date}
          </p>
        </div>
        <div className="">
          <p className="line-clamp-3">{props.subtitle}</p>
          <Link href={`/work/${props.slug}`} className="">
            <span className="text-blue-500 hover:underline">Read more</span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogPreview;
