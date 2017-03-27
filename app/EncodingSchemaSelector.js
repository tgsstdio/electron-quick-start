const Component = require('inferno-component')
const createElement = require('inferno-create-element')

class EncodingSchemaSelector extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return createElement(
      'div'
      , { className: 'row' }
      , createElement(
        'div'
        , { id: 'block_structure', className: 'column column-90' }
        , createElement('h2', null, 'Block encoding')
        , createElement(
          'select'
          , null
          , createElement(
            'option'
            , { value: 'masked-32', selected: true }
            , 'Masked 32-bit'
          )
          , createElement(
            'option'
            , { value: 'masked-64', selected: true }
            , 'Masked 64-bit'
          )
          , createElement(
            'option'
            , { value: 'zipped-mask-32', selected: true }
            , 'Masked 32-bit (Zipped)'
          )
        )
      )
    )
  }
}

module.exports = EncodingSchemaSelector
