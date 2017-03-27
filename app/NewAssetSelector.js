const Component = require('inferno-component')
const createElement = require('inferno-create-element')

class NewAssetSelector extends Component
{
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return createElement(
      'div'
      , null
      , createElement('h2', null, 'Insert new asset')
      , createElement(
        'select'
        , null
        , createElement(
          'option'
          , { value: 'vkshader' }
          , 'Vulkan shader'
        )
        , createElement(
          'option'
          , { value: 'glslshader' }
          , 'GLSL shader'
        )
      )
      , createElement(
        'input'
        , { type: 'file' }
        , null
      )
    )
  }
}

module.exports = NewAssetSelector
