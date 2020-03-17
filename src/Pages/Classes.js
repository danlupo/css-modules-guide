import React, { Component } from 'react'
import a from '../App.css'
import CssModules from 'react-css-modules'
import { CopyBlock, dracula } from 'react-code-blocks'
import completelyDifferentButton from '../Components/Button/completelyDifferentButton.css';

import Button from '../Components/Button';
import Anchor from '../Components/Anchor';

import defaultClasses from '../styles.css';

class Basic extends Component {

  render() {
    
    return (
        <div styleName="App">
          <h1>className vs. classes</h1>
<h2>className is JSX</h2>

            <CopyBlock
              text={'const element = <h1 className="myClass">Hello World!</h1>;'}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <h3>Compiles to</h3>
          <CopyBlock
              text={'var element = React.createElement("h1", {\n\
    className: "myClass"\n\
}, "Hello World!");'}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <h3>Renderd in DOM as 'class'</h3>
          <CopyBlock
              text={'<h1 class="myClass">Hello World!</h1>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>Nothing to do with CSS-modules. This is pure JSX behavior. Knowing this we can pass className in any way we want, as long as its a <b>String</b>.</p>

          <CopyBlock
              text={'const className = "myClass";\n\
const element = <h1 className={className}>Hello World!</h1>;\n\
\n\
/* OR */\n\
\n\
const elementProps = {\n\
    className: "myClass",\n\
    text: "Hello World!",\n\
}\n\
const element2 = <h1 className={elementProps.className}>{elementProps.text}</h1>;\n\
'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>C'est tout la meme chose: JSX</p>
          <br/>
          <hr/>
          <br/>
          <h2>'classes' is a prop</h2>
          <p>Just like any other prop, but CSS-modules use this prop to compile the final 'className' values for React.createElement</p>
          <CopyBlock
              text={'<Button clickHandler={handleClick} classes={classes}/>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>For React <b>classes</b> and <b>clickHandler</b> are pretty much the same thing: <b>props.</b></p>
          <p>However <b>classes</b> is used by CSS modules. Lets see how...</p>
          <br/><br/>
          <h2>CSS imports are converted to a localized object. Given styles.css:</h2>
          <CopyBlock
              text={'.styleA {\n\
    font-size: 12px;\n\
}\n\
.styleB {\n\
  font-size: 40px;\n\
}'}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>and we import that in our JS</p>
          <CopyBlock
              text={'import defaultClasses from \'./styles.css\';\n\
console.log(defaultClasses);'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>Will console log something like:</p>
          <CopyBlock
              text={'{styleA: "styles__styleA___3xZH0", styleB: "styles__styleB___3hbVa"}'}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>Each class name has been name spaced (styles__...) and localized (...__3xZH0).<br/>CSS Modules will compile the css accordingly, while we can simplky use the object keys</p>
          <CopyBlock
              text={'<h1 className={defaultClasses.styleA}>Hello World!</h1>; // ClassName for JSX\n\
<Heading classes={defaultClasses}>Hello World!</Heading>; // Classes for components which use them'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>And we end up with generated html like</p>
          <CopyBlock
              text={'<h1 class="styles__styleA___3xZH0">Hello World!</h1>;\n\
<h1 class="styles__styleB___3hbVa">Hello World!</h1>;'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <div className={a.box}>
            <h1 className={defaultClasses.styleA}>Hello World!</h1>
            <h1 className={defaultClasses.styleB}>Hello World!</h1>
          </div>
          <p>And matching generated CSS</p>
          <CopyBlock
              text={'.styles__styleA___3xZH0 {\n\
    font-size: 12px;\n\
}\n\
.styles__styleB___3hbVa {\n\
    font-size: 40px;\n\
}'}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
        </div>
    );
  }
}

export default CssModules(Basic, a);
