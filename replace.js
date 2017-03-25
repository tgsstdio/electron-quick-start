const path = require('path')
const fs = require('fs')
const execFile = require('child_process').execFile

// argument
function transformGLSLShader (inputFile, entryPoint, outputFile, callback) {
  // const inputFile = 'sample.frag'
  // const entryPoint = 'fragFunc'
  // const outputFile = '00000000.spv'
  // function allDone () { console.log('All done') }
  if (entryPoint.includes(' ')) {
    var errorObj = { message: 'error : no spaces allowed with entryPoint' }
    throw errorObj
  }

  const localPath = path.join(path.resolve('.'), 'bin')
  const inputFilePath = path.join(localPath, inputFile)

  fs.exists(inputFilePath, (exists) => {
    if (!exists) {
      var errorObj = { message: `error : ${inputFilePath} does not exist` }
      throw errorObj
    }
    // console.log('File found')
  })

  const options = {
    cwd: localPath
  }

  const child = execFile(
    path.join(localPath, 'SPIRVReplace.exe'),
    [inputFile, entryPoint],
    options,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message)
      }
      // console.log(stdout)
    }
  )

  const immediateFile = path.join(localPath, inputFile + '.spv')

  function deleteImmediateFile (err) {
    if (err) {
      throw err
    }
    fs.unlink(immediateFile, callback)
  }

  function renameImmediateFile (exists) {
    if (exists) {
      var outputFilePath = path.join(localPath, outputFile)

      fs.rename(immediateFile, outputFilePath, deleteImmediateFile)
    }
  }

  function handleImmediateFile (code, signal) {
    if (code === 0) {
      fs.exists(immediateFile, renameImmediateFile)
    }
  }

  child.on('close', handleImmediateFile)
}

module.exports = transformGLSLShader
