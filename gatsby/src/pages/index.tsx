import React from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash"
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import "./index.css"

SyntaxHighlighter.registerLanguage("bash", bash)
SyntaxHighlighter.registerLanguage("javascript", javascript)

export default function Home() {
  const codeString = `export const retryOnFail = async (url, callback, n) => {
  try {
    const { data } = await Axios.get(url)
    callback(data)
    return data
  } catch (error) {
    if (n === 1) console.log(error)
    else setTimeout(() => retryOnFail(n - 1), 1000)
  }
}`
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
      <h2>Gatsby</h2>
      <div>
        <div>created with:</div>
        <SyntaxHighlighter language="bash" style={dracula}>
          gatsby new gatsby
          https://github.com/gatsbyjs/gatsby-starter-hello-world
        </SyntaxHighlighter>
      </div>

      <h3>Example</h3>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
