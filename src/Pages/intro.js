import React, { Component } from 'react'
import a from '../App.css'
import CssModules from 'react-css-modules'
import { CodeBlock, dracula } from 'react-code-blocks'
import completelyDifferentButton from '../Components/Button/completelyDifferentButton.css';
import Collapsible from 'react-collapsible';

import Button from '../Components/Button';
import Anchor from '../Components/Anchor';


class Intro extends Component {



  render() {
    return (
        <div styleName="App">
          <h1>CSS Modules Usage</h1>
<h2>Pre-requisites</h2>
<ul>
  <li>HTML vs JSX</li>
  <li>Object manipulation and merging</li>
  </ul>
            
        </div>
    );
  }
}

export default CssModules(Intro, a);
