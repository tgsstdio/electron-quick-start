const Component = require('inferno-component')
const createElement = require('inferno-create-element')

class AssetIdGenerator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title
      , encodingSchema: props.encodingSchema
      , required: false
      , blockMask: 'ffff0000'
      , indexMask: '0000ffff'
      , blockNumber: props.blockNumber
      , indexNumber: props.indexNumber
    }
  }

  render () {
    return createElement(
      'div'
      , { className: 'row' }
      , createElement(
        'div'
        , { id: 'asset_identifier', className: 'column column-90' }
        , createElement(
          'h2'
          , null
          , 'Generate asset identifier'
        )
        , createElement(
          'form'
          , null
          , createElement(
            'h3'
            , null
            , 'Block encoding : '
            , createElement(
              'span'
              , { id: 'block_encoding' }
              , this.state.encodingSchema
            )
          )
          , createElement(
            'fieldset'
            , null
            , createElement(
              'label'
              , { for: 'blockMask' }
              , 'Block mask'
            )
            , createElement(
              'input'
              ,{ 
                id: 'blockMask'
                , type: 'text'
                , placeholder: 'Enter front bitwise mask here (in hexadecimal)'
                , required: true
                , value: this.state.blockMask
              }
              , null
            )
            , createElement(
              'label'
              , { for: 'indexMask' }
              , 'Index mask'
            )
            , createElement(
              'input'
              , {
                id: 'indexMask'
                , type: 'text'
                , placeholder: 'Enter back bitwise mask here (in hexadecimal)'
                , required: true
                , value: this.state.indexMask
              }
              , null
            )
            , createElement(
              'label'
              , { for: 'blockNumber' }
              , 'Block number'
            )
            , createElement(
              'input'
              , {
                id: 'blockNumber'
                , type: 'number'
                , min: 0
                , placeholder: 'Enter a block number here'
                , required: true
                , value: this.state.blockNumber
              }
              , null
            )
            , createElement(
              'label'
              , { for: 'indexNumber' }
              , 'Index number'
            )
            , createElement(
              'input'
              , {
                id: 'indexNumber'
                , type: 'number'
                , min: 0
                , placeholder: 'Enter a index number here'
                , required: true
                , value: this.state.indexNumber
              }
              , null
            )
            , createElement(
              'input'
              , {
                className: 'button-primary'
                , type: 'submit'
                , value: 'Generate'
              }
            )
          )
        )
      )
    )
  }
}

module.exports = AssetIdGenerator
