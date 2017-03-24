// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import Inferno from 'inferno'
import Component from 'inferno-component'

class AssetIdGenerator extends Component {
  constructor (props) {
    super(props)
    var parent = this
    parent.state = {
      title: 'abc'
    }
  }

  render () {
    return <form> <h3>Block encoding : <span id='block_encoding' /></h3>
      <fieldset>
        <label for='blockMask'>Block mask</label>
        <input type='text' placeholder='Enter front bitwise mask here (in hexadecimal)' id='blockMask' required />
        <label for='indexMask'>Index mask</label>
        <input type='text' placeholder='Enter back bitwise mask here (in hexadecimal)' id='indexMask' required />
        <label for='blockNumber'>Block number</label>
        <input type='number' id='blockNumber' min='1' placeholder='Enter a block number here' required />
        <label for='indexNumber'>Index number</label>
        <input type='number' id='indexNumber' min='1' placeholder='Enter an index number here' required />
        <input class='button-primary' type='submit' value='Generate' />
      </fieldset>
    </form>
  }
}

var canvas = document.getElementById('canvas')

Inferno.render(<AssetIdGenerator />, canvas, {})
