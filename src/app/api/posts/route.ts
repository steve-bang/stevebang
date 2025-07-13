import { getBlogPostsBySearch } from "@/lib/mdx"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const keyword = searchParams.get("keywords")?.toLowerCase() ?? ""

  if(keyword == "") return  NextResponse.json([]);

  const filtered = await getBlogPostsBySearch(keyword)

  return NextResponse.json(filtered)
}