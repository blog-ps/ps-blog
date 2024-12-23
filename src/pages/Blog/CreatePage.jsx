// import { SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
// import { jsx } from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import remarkGfm from 'remark-gfm';
// SyntaxHighlighter.registerLanguage('jsx', jsx);
import MyEditor from './sections/MyEditor';
import { useRef } from 'react';
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

const CreatePage = () => {
  const markdown = useRef();
  return (
    <Wrapper>
      <EditorWrapper>
        <MyEditor markdown={markdown}></MyEditor>
      </EditorWrapper>
      <MarkdownWrapper>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </MarkdownWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 5vw;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2vw;
`;
const EditorWrapper = styled.div`
  flex: 1;
`;
const MarkdownWrapper = styled.div`
  flex: 1;
`;
export default CreatePage;
