import React, { Component } from 'react'
import a from '../App.css'
import CssModules from 'react-css-modules'
import { CodeBlock, dracula } from 'react-code-blocks'
import completelyDifferentButton from '../Components/Button/completelyDifferentButton.css';
import Collapsible from 'react-collapsible';

import Button from '../Components/Button';
import Anchor from '../Components/Anchor';


class Basic extends Component {

  constructor(props) {
    super(props);

  this.state = {
      todos: []
    };
  }

  render() {
    console.log(this.state);
    return (
        <div styleName="App">
          <h1>Inheriting in CSS with "composes"</h1>
<h2>Button CSS</h2>
            <CodeBlock
              text={'.root {\n\
    padding: 10px;\n\
    font-size: 12px;\n\
    background-color: cornflowerblue;\n\
    border: none;\n\
    display: inline-block;\n\
    color: inherit;\n\
    text-decoration: inherit;\n\
}'}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
<h2>Anchor CSS</h2>
            <CodeBlock text={".root {\n\
    composes: root from \'../Button/button.css\'; \n\
    background-color: deeppink;\n\
}"}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
          <h2>Components</h2>
            <CodeBlock
              text={'<Button/>\n\
<Anchor/>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <h2>Result</h2>
            <Button/><br/>
            <Anchor/>

            <p>Anchor will automatically inherit the button class, it's final HTML will have both:</p>
            <CodeBlock
              text={'<a class="anchor__root___2-w9S button__root___1nOXG">Anchor</a>'}
              language="text"
              theme={dracula}
              showLineNumbers={false}
          />
            <Collapsible 
trigger="Show Code"
triggerTagName="a"
transitionTime={150}>
  <h3>Anchor</h3>
<CodeBlock
              text={'import React from \'react\';\nimport defaultClasses from \'.\/anchor.css\';\nimport { mergeClasses } from \'..\/..\/classify\';\n\n\/**\n * @typedef Anchor\n * @kind functional component\n *\n * @param {props} props React component props\n *\n * @returns {React.Element} A React component that displays a Anchor that toggles the map.\n *\/\nconst Anchor = props => {\n    const classes = mergeClasses(defaultClasses, props.classes);\n\n    const handleClick = () => {};\n\n    \/* @TODO: WIP *\/\n    return (\n        <a type=\"button\" href=\"#somewhere\" onClick={handleClick} className={classes.root}>\n            Anchor\n        <\/a>\n    );\n};\n\n\nexport default Anchor;\n'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <h3>Button</h3>
<CodeBlock
              text={'import React from \'react\';\nimport defaultClasses from \'.\/button.css\';\nimport { mergeClasses } from \'..\/..\/classify\';\n\n\/**\n * @typedef Button\n * @kind functional component\n *\n * @param {props} props React component props\n *\n * @returns {React.Element} A React component that displays a Button that toggles the map.\n *\/\nconst Button = props => {\n    const classes = mergeClasses(defaultClasses, props.classes);\n\n    const handleClick = () => {};\n\n    \/* @TODO: WIP *\/\n    return (\n        <button type=\"button\" onClick={handleClick} className={classes.root}>\n            Button\n        <\/button>\n    );\n};\n\nexport default Button;\n'}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
</Collapsible>
          <hr/>
          <h1>Overriding with props</h1>
          <h2>CSS</h2>
          <CodeBlock
              text={'.root {\n\
    font-size: 0;\n\
    height: 70px;\n\
    width: 70px;\n\
    border-radius: 50%;\n\
    border:dashed 5px rgb(6, 177, 245);\n\
    -webkit-animation-name: spin;\n\
    -webkit-animation-duration: 3.5s;\n\
    -webkit-animation-iteration-count: infinite;\n\
    -webkit-animation-timing-function: linear;\n\
}'}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
          <h2>HTML</h2>
          <p>We do not use composes and we pass as the classes property</p>
          <CodeBlock
              text={'<Button classes={completelyDifferentButton}/>\n\
'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <h2>Result</h2>
          <Button classes={completelyDifferentButton}/>   
        </div>
    );
  }
}

export default CssModules(Basic, a);
