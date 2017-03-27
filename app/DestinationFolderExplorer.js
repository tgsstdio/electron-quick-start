const Component = require('inferno-component')
const createElement = require('inferno-create-element')

class DestinationFolderExplorer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return createElement(
      'div'
      , { className: 'row' }
      , createElement(
        'div'
        , { id: 'dest_folder', className: 'column column-90' }
        , createElement('h2', null, 'Destination folder')
        , createElement(
          'input'
          , { id: 'output', type: 'url', value: 'file://' }
          , null
        )
        , createElement('br', null, 'null')
        , createElement(
          'h3'
          , { id: 'existing_assets' }
          , 'Existing assets'
        )
        , createElement(
          'table'
            , null
            , createElement(
              'thead'
              , null
              , createElement(
                'tr'
                , null
                , createElement('th', null, 'Asset Id')
                , createElement('th', null, 'File type')
              )
            )
            , createElement(
              'tbody'
              , null
              // add new row here
              , null
            )
        )
      )
    )
  }
}

module.exports = DestinationFolderExplorer
