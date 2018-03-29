process.stdin.setEncoding('UTF-8');

process.stdin.on('readable', function () {
  var input = process.stdin.read()
  if (input !== null) {
    var instruction = input.toString().trim()
    switch (instruction) {
      case 'exit':
        process.stdout.write('Quitting app!\n')
        process.exit()
        break
      case 'info':
        console.log('Node version: ' + process.versions.node)
        console.log('Lang version: ' + process.env.lang)
        break
      default:
        process.stdout.write('Wrong instruction!\n')
    }
  }
})
