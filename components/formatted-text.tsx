"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function FormattedText({ text }: { text: string }) {
  // Simple regex to find phone numbers and convert them to markdown links if not already
  // This matches numbers like +201023610692 or 01023610692
  // We only replace phone numbers that are NOT already part of a markdown link
  // This regex matches numbers but uses a negative lookahead/lookbehind approach (simulated)
  // We only replace phone numbers that are NOT already part of a link
  const formattedText = text.replace(/(?:\+?\d{10,14})/g, (match, offset, fullText) => {
    // 1. Check if the match is inside a URL or Markdown link
    const beforeMatch = fullText.slice(0, offset);
    const afterMatch = fullText.slice(offset + match.length);
    
    // Check if we are inside () of a markdown link like [text](url)
    const openParen = beforeMatch.lastIndexOf('(');
    const closeParen = beforeMatch.lastIndexOf(')');
    const isInParen = openParen > closeParen && afterMatch.includes(')');

    // Check if we are inside [] of a markdown link like [text](url)
    const openBracket = beforeMatch.lastIndexOf('[');
    const closeBracket = beforeMatch.lastIndexOf(']');
    const isInBracket = openBracket > closeBracket && afterMatch.includes(']');
    
    // Check if preceded by URL indicator characters
    const isUrlPart = /[:/?=&]$/.test(beforeMatch);

    if (isInParen || isInBracket || isUrlPart) {
      return match;
    }

    return `[${match}](tel:${match})`;
  });

  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => {
          const isPhone = props.href?.startsWith('tel:')
          return (
            <a 
              {...props} 
              target={isPhone ? undefined : "_blank"}
              rel={isPhone ? undefined : "noopener noreferrer"}
              className={`text-[#C5A023] hover:underline font-bold decoration-dotted underline-offset-4 ${isPhone ? 'inline-block' : ''}`}
              style={isPhone ? { direction: 'ltr', unicodeBidi: 'embed' } : {}}
            />
          )
        },
        ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside my-2 space-y-1" />,
        ol: ({ node, ...props }) => <ol {...props} className="list-decimal list-inside my-2 space-y-1" />,
        p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
      }}
    >
      {formattedText}
    </ReactMarkdown>
  )
}
