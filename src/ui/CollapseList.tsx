"use client";
import { dropdownFetchAction } from "@/lib/action";
import { Post } from "@/types";
import { useEffect, useState } from "react";

type PropsType = {
  isOpen: boolean;
  postId: number;
};

export default function CollapseList({ isOpen, postId = 1 }: PropsType) {
  const [posts, setPosts] = useState<{ data: any } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      if (isOpen) {
        const data = await dropdownFetchAction(postId);
        setPosts(data);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [isOpen, postId]);

  if (isLoading) {
    return <div style={{ backgroundColor: "gray", color: "white" }}>ローディング中</div>;
  }

  return (
    posts &&
    posts.data.map((post: Post, index: any) => (
      <li key={index} style={{ backgroundColor: "lightgreen", listStyleType: "none" }}>
        リンク : {post.title}
      </li>
    ))
  );
}
