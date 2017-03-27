const Component = require('inferno-component')
const createElement = require('inferno-create-element')

class OperatingSystemSelector extends Component {
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
        , { id: 'operating_system', className: 'column column-90' }
        , createElement('h2', null, 'Operating system')
        , createElement(
          'select'
          , null
          , createElement(
            'option'
            , { value: 'win' }
            , 'Windows'
          )
          , createElement(
            'option'
            , { value: 'mac' }
            , 'Mac'
          )
        )
      )
    )
  }
}

module.exports = OperatingSystemSelector
