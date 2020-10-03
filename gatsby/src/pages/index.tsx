import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs"
import "./index.css"

export default function Home() {
  const codeString = `
  <script type="application/ld+json">
  {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ""
        }
      }]
    }
  </script>`
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h1>React Syntax Highlighter Issue Reproduction</h1>
      <SyntaxHighlighter language="javascript" style={github}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
