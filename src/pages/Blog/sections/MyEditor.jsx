import styled from 'styled-components';
// import { SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
// import { jsx } from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import remarkGfm from 'remark-gfm';
// SyntaxHighlighter.registerLanguage('jsx', jsx);
const MyEditor = ({ children, markdown, setMarkdown }) => {
  const handleSetContext = () => {
    setMarkdown(markdown.current.value);
  };
  return (
    <Wrapper contentEditable>
      <div onChange={handleSetContext} ref={markdown}>
        {children}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export default MyEditor;
