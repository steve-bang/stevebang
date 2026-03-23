import { getBlogPosts } from "@/lib/mdx"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const keyword = searchParams.get("keywords")?.toLowerCase() ?? ""
  const posts = await getBlogPosts();

  if(keyword == "") return  NextResponse.json(posts);

  const filtered = await posts.filter(post => 
    post.title.toLowerCase().includes(keyword) ||
    post.description.toLowerCase().includes(keyword)
  );

  return NextResponse.json(filtered)
}