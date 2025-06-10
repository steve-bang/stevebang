import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export async function extractHeadings(markdown: string): Promise<Heading[]> {
  const tree = unified().use(remarkParse).parse(markdown);
  const headings: Heading[] = [];

  visit(tree, 'heading', (node: any) => {
    const text = node.children
      .filter((n: any) => n.type === 'text' || n.type === 'inlineCode')
      .map((n: any) => n.value)
      .join('');
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    headings.push({ id, text, level: node.depth });
  });

  return headings;
}