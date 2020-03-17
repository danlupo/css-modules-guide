import React, { Component } from 'react'
import a from '../App.css'
import CssModules from 'react-css-modules'
import { CopyBlock, dracula } from 'react-code-blocks'
import completelyDifferentButton from '../Components/Button/completelyDifferentButton.css';

import Button from '../Components/Button';
import Anchor from '../Components/Anchor';

import defaultClasses from '../styles.css';
console.log(defaultClasses);


class Basic extends Component {

  render() {
    
    return (
        <div styleName="App">
          <h1>Merge Classes</h1>
            <CopyBlock
              text={'export const mergeClasses = (...args) => Object.assign({}, ...args);'}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>This will merge any objects, not just CSS</p>
          <CopyBlock
              text={"const objA = {\n    a: \"a\",\n    b: \"b\",\n}\n\nconst objB = {\n    b: \"c\",\n    c: \"d\"\n}\n\nconsole.log(mergeClasses(objA, objB);"}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>Results in</p>
          <CopyBlock
              text={"{a: \"a\", b: \"c\", c: \"d\"}"}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>The key is understanding <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object Assign</a></p>
        </div>
    );
  }
}

export default CssModules(Basic, a);
