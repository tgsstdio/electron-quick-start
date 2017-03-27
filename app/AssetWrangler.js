const Component = require('inferno-component')
const createElement = require('inferno-create-element')

const AssetIdGenerator = require('./AssetIdGenerator')
const EncodingSchemaSelector = require('./EncodingSchemaSelector')
const OperatingSystemSelector = require('./OperatingSystemSelector')
const DestinationFolderExplorer = require('./DestinationFolderExplorer')

class AssetWrangler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      assetGenerator: props.assetGenerator,
      encodingSchema: props.encodingSchema
    }
  }

  render () {
    return createElement(
      'div'
      , null
      , createElement(
        'h1'
        , null
        , 'mg-asset-wrangler'
      )
      , createElement(
        'div'
        , { className: 'container' }
        , createElement(
          EncodingSchemaSelector
          , this.state.encodingSchema
          , null
        )
        , createElement('hr', null, null)
        , createElement(
          OperatingSystemSelector
          , null
          , null
        )
        , createElement('hr', null, null)
        , createElement(
          DestinationFolderExplorer
          , null
          , null
        )
        , createElement('hr', null, null)
        , createElement(
          AssetIdGenerator
          , this.state.assetGenerator
          , null
        )
        , createElement('hr', null, null)
      )
    )
  }
}

module.exports = AssetWrangler
