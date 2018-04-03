import React from 'react'
import ReactStory, { defaultProps } from 'react-story'

import CodeSandbox from './CodeSandbox.js'
import HOCReadme from './stories/HOCReadme.js'
import Readme from './stories/Readme.js'

import './stories/utils/prism.css'

const stories = [
  { name: 'Readme', component: Readme },
  { name: 'HOC Readme', component: HOCReadme },

  { name: 'With Vanilla Styles', component: CodeSandbox('v0nmw5ykk5') },
  { name: 'With Bootstrap Styles', component: CodeSandbox('382pjronm') },
  { name: 'With Material Design Styles', component: CodeSandbox('2o1pv6925p') },
  { name: 'With Country flags', component: CodeSandbox('6w41wlvj8z') },
  { name: 'Simple Select', component: CodeSandbox('5xzn337wjn') },
  {
    name: 'Custom Select/Unselect All Buttons (HOC)',
    component: CodeSandbox('n348v2qox0')
  },
  {
    name: 'Internal Select All Checkbox (HOC)',
    component: CodeSandbox('rjwqq86p1n')
  },
  {
    name: 'Prevent re-render on parent render (HOC)',
    component: CodeSandbox('v05klkn56l')
  },
  { name: 'Tree Node Paths (HOC)', component: CodeSandbox('l765q6lmrq') },
  { name: 'Clear search on node selection', component: CodeSandbox('jloz1222kv') }
]

export default class App extends React.Component {
  render() {
    return (
      <ReactStory
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
        pathPrefix="story/"
        Story={props => (
          <defaultProps.StoryWrapper
            css={{
              padding: 0,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              {...props}
              style={{
                flex: '1 0 auto',
                position: 'relative'
              }}
            />
          </defaultProps.StoryWrapper>
        )}
        stories={stories}
      />
    )
  }
}
