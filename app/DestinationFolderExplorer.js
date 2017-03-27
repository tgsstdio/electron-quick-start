const linkEvent = require('inferno').linkEvent
const Component = require('inferno-component')
const createElement = require('inferno-create-element')

class DestinationFolderExplorer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      destinationFolder: props.destinationFolder
    }
  }

  render () {
    return createElement(
      'div'
      , { className: 'row' }
      , createElement(
        'div'
        , { id: 'dest_folder', className: 'column column-90' }
        , createElement('h2', null, `Destination folder ${this.state.destinationFolder.files.length}`)
        , createElement(
          'input'
          , { 
            id: 'select-directory'
            , type: 'button'
            , value: 'Select folder'
            , onClick: linkEvent(this, this.state.destinationFolder.selectFolder)
          }
          , null
        )
        , createElement(
          'div'
          , null
          , createElement(
            'span'
            , { id: 'selected-file' }
            , null
          )
        )
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
