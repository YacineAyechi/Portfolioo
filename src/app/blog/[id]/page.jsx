"use client";

import blogsData from "@/data/blogsData";
import { useRouter } from "next/navigation";
import "./blogSingle.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const currentBlogId = parseInt(id);
  const blog = blogsData.find((blog) => blog.id === currentBlogId);

  if (!blog) {
    router.push("/not-found");
    return null;
  }

  return (
    <div className="blogSingleContainer">
      <h1>{blog.title}</h1>

      <div className="dateReadingSingle">
        <p>
          {blog.date} - {blog.readingTime} min read
        </p>
      </div>

      <div>
        <Image src={blog.image} alt="" width={1250} height={450} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="blogSingleContent"
      />
    </div>
  );
};

export default BlogPost;
