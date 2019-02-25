import React from 'react'
import addons from '@storybook/addons';
import pretty from 'pretty';
import Prism from 'prismjs';

import ReactDOMServer from 'react-dom/server'

import { style } from './style';

export class ShowStaticMarkup extends React.Component {
  render() {
    const { children } = this.props;
    
    const markup = Prism.highlight(pretty(ReactDOMServer.renderToStaticMarkup(children)), Prism.languages.markup, 'markup');

    const channel = addons.getChannel();
    channel.emit('evgenykochetkov/static-markup/show-markup', markup + style);

    return children;
  }
}

export default {
  addWithStaticMarkup (storyName, story) {
    this.add(storyName, () => (
      <ShowStaticMarkup>
        { story() }
      </ShowStaticMarkup>
    ))
  }
}
