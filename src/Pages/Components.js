import React, { Component } from 'react'
import a from '../App.css'
import CssModules from 'react-css-modules'
import { CopyBlock, dracula } from 'react-code-blocks'
import Form from '../Components/Form/form';
import Collapsible from 'react-collapsible';

import overrideFormClasses from '../Components/Form/formsB.css';
import extendedFormClasses from '../Components/Form/formsAB.css';

console.log({input:overrideFormClasses.input})

class Basic extends Component {

  render() {
    return (
        <div styleName="App">
          <h1>How are CSS modules used with components</h1>
<h2>Let's see... </h2>
<h3>Default Styles</h3>
<p>This is how the form should look, these are "default styles" by choice (there is no rule, just common sense)</p>
<Form/>
<Collapsible 
trigger="Show Code"
triggerTagName="a"
transitionTime={150}>
  <h3>JSX</h3>
<CopyBlock
              text={'<form className={classes.form} method="post" action="">\n\
              \n\
    <h3 className={classes.logo}>Log In</h3>\n\
    \n\
    <label className={classes.label} for="username">Username</label>\n\
    <input className={classes.input} type="text" id="username" name="username"\n\
        placeholder="Type in your username.." autocomplete="off" required />\n\
    \n\
    <label className={classes.label} for="password">Password</label>\n\
    <input className={classes.input} type="password" id="password" name="password"\n\
        placeholder="Enter your password.." autocomplete="off" required />\n\
    \n\
    <a className={classes.anchor} href="#forgot">Forgot Password?</a>\n\
    <a className={classes.anchor} href="#register">Register</a>\n\
    \n\
    <input className={classes.submit} type="submit" name="submit" value="Log In" />\n\
    \n\
</form>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <h3>CSS</h3>
<CopyBlock
              text={".form {\n\tmargin: 20px auto;\n\tpadding:30px;\n\twidth:400px;\n\theight:auto;\n\toverflow:hidden;\n\tbackground:white;\n\tborder-radius:10px;\n}\n\n.label {\n\tfont-size:14px;\n\tcolor:darkgray;\n\tcursor:pointer;\n}\n\n.label,\n.input {\n\tfloat:left;\n\tclear:both;\n}\n\n.input {\n\tmargin:15px 0;\n\tpadding:15px 10px;\n\twidth:100%;\n\toutline:none;\n\tborder:1px solid #bbb;\n\tborder-radius:20px;\n\tdisplay:inline-block;\n\t-webkit-box-sizing:border-box;\n\t   -moz-box-sizing:border-box;\n\t        box-sizing:border-box;\n    -webkit-transition:0.2s ease all;\n\t   -moz-transition:0.2s ease all;\n\t    -ms-transition:0.2s ease all;\n\t     -o-transition:0.2s ease all;\n\t        transition:0.2s ease all;\n}\n\n.input:focus,\n.input:focus {\n\tborder-color:cornflowerblue;\n}\n\n.submit {\n\tpadding:15px 50px;\n\twidth:auto;\n\tbackground:#1abc9c;\n\tborder:none;\n\tcolor:white;\n\tcursor:pointer;\n\tdisplay:inline-block;\n\tfloat:right;\n\tclear:right;\n\t-webkit-transition:0.2s ease all;\n\t   -moz-transition:0.2s ease all;\n\t    -ms-transition:0.2s ease all;\n\t     -o-transition:0.2s ease all;\n\t        transition:0.2s ease all;\n}\n\n.submit:hover {\n\topacity:0.8;\n}\n\n.submit:active {\n\topacity:0.4;\n}\n\n.anchor {\n\tmargin:10px;\n\tfloat:left;\n\tclear:left;\n\tdisplay:inline-block;\n\tcolor:cornflowerblue;\n\ttext-decoration:none;\n}\n\n.anchor:hover {\n\tcolor:darkgray;\n}\n\n.logo {\n\tmargin:0 auto;\n\twidth:200px;\n\tfont-family:\'Lily Script One\', cursive;\n\tfont-size:60px;\n\tfont-weight:bold;\n\ttext-align:center;\n\tcolor:lightgray;\n\t-webkit-transition:0.2s ease all;\n\t   -moz-transition:0.2s ease all;\n\t    -ms-transition:0.2s ease all;\n\t     -o-transition:0.2s ease all;\n\t        transition:0.2s ease all;\n}\n\n.logo:hover {\n\tcolor:cornflowerblue;\n}"}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
</Collapsible>
<h3>Extended Styles</h3>
<p>Here we define some of the classes, and they should 'compose' the original classes or define all the css properties required, otherwise things look weird. Notice the submit button</p>
<Form classes={extendedFormClasses}/>
<Collapsible 
trigger="Show Code"
triggerTagName="a"
transitionTime={150}>
  <h3>JSX</h3>
<CopyBlock
              text={'<Form classes={extendedFormClasses}/>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <h3>CSS</h3>
<CopyBlock
              text={".label {\n\tcomposes: label from \'.\/formsA.css\';\n\tfont-size:14px;\n\tcolor:darkgray;\n\tcursor:pointer;\n}\n\n.input {\n\tcomposes: input from \'.\/formsA.css\';\n\tborder-radius: 0px;\n}\n\n.logo {\n\tcomposes: logo from \'.\/formsA.css\';\n\tcolor:cornflowerblue;\n}\n\n.logo:hover {\n\tcolor:chartreuse;\n}\n\n.submit {\n\t/* No 'composes' */\n\tcolor:cornflowerblue;\n}"}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
</Collapsible>
<h3>Complete Override</h3>
<p>This form has a whole new CSS (no <b>'composes'</b>) sheet that overrides all the existing styles from the default</p>
<Form classes={overrideFormClasses}/>
<p>We can supply these styles through the 'classes' prop because we programmed our 'Form' component with </p>

<Collapsible 
trigger="Show Code"
triggerTagName="a"
transitionTime={150}>
  <h3>JSX</h3>
<CopyBlock
              text={'<Form classes={overrideFormClasses}/>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <h3>CSS</h3>
<CopyBlock
              text={".form {\n\tmargin: 20px auto;\n\tpadding:30px;\n\twidth:200px;\n\theight:auto;\n\toverflow:hidden;\n\tbackground:rgb(168, 168, 168);\n\tborder-radius:10px;\n}\n\n.label {\n\tfont-size:16px;\n\tcolor:cornflowerblue;\n\tcursor:pointer;\n}\n\n.label,\n.input {\n\tfloat:left;\n\tclear:both;\n}\n\n.input {\n\tmargin:5px 0;\n\tpadding:5px 7px;\n\twidth:80%;\n\tborder:1px dashed #bbb;\n\tborder-radius:0px;\n\tdisplay:inline-block;\n\t-webkit-box-sizing:border-box;\n\t   -moz-box-sizing:border-box;\n\t        box-sizing:border-box;\n    -webkit-transition:0.2s ease all;\n\t   -moz-transition:0.2s ease all;\n\t    -ms-transition:0.2s ease all;\n\t     -o-transition:0.2s ease all;\n\t        transition:0.2s ease all;\n}\n\n.input:focus,\n.input:focus {\n\tborder-color:cornflowerblue;\n}\n\n.submit {\n\tpadding:40px 50px;\n\twidth:100%;\n\tbackground:#1a81bc;\n\tborder:none;\n\tcolor:white;\n\tcursor:pointer;\n\tdisplay:inline-block;\n\t-webkit-transition:0.2s ease all;\n\t   -moz-transition:0.2s ease all;\n\t    -ms-transition:0.2s ease all;\n\t     -o-transition:0.2s ease all;\n\t        transition:0.2s ease all;\n}\n\n.submit:hover {\n\topacity:0.8;\n}\n\n.submit:active {\n\topacity:0.4;\n}\n\n.anchor {\n\tmargin:10px;\n\tdisplay:inline-block;\n\tcolor:rgb(154, 84, 219);\n\ttext-decoration:none;\n}\n\n.anchor:hover {\n\tcolor:black;\n}\n\n.logo {\n\tmargin:0 auto;\n\twidth:200px;\n\tfont-family:\'Lily Script One\', cursive;\n\tfont-size:40px;\n\tfont-weight:bold;\n\ttext-align:center;\n\tcolor:lightgray;\n}"}
              language="css"
              theme={dracula}
              showLineNumbers={false}
          />
</Collapsible>

<CopyBlock
              text={'const classes = mergeClasses(defaultClasses, props.classes);'}
              language="javascript"
              theme={dracula}
              showLineNumbers={false}
          />
          <p>We'll take a quick overview of what this does in the <a href="/components">next section</a></p>
<br/>
          <h3>"Cherry-pick" Override</h3>
    <p>We can override any style(s), by passing it inside a new object, note the extra {} defining input</p>
    <CopyBlock
              text={'<Form classes={{input:overrideFormClasses.input}}/>'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
          <Form classes={{input:overrideFormClasses.input}}/>
    <CopyBlock
              text={'console.log({input:overrideFormClasses.input})\n\
//will out put somthing like\n\
{input: "formsB__input___wcV49"}'}
              language="jsx"
              theme={dracula}
              showLineNumbers={false}
          />
        </div>
    );
  }
}

export default CssModules(Basic, a);
