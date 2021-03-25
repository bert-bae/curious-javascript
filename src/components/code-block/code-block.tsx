import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

export type CodeBlockProps = {
  code: string;
  syntax: Language;
  showCodeLines?: boolean;
};

const useStyles = makeStyles((theme) => ({
  codeBlockContainer: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "black",
    padding: theme.spacing(2),
  },
}));

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  syntax,
  showCodeLines,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.codeBlockContainer}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code.trim()}
        language={syntax}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={`c-pre`}>
            {/* Tokens are equivalent to each row/line of code text */}
            {tokens.map((line, index) => (
              <div
                // className="c-line"
                key={index}
                {...getLineProps({ line, key: index })}
              >
                {showCodeLines && (
                  <span className="c-line-number">{index + 1} </span>
                )}

                <span className="c-line-content">
                  {/* Show code snippet for that line */}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;
