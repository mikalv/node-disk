var Disk = require( '../' )
var assert = require( 'assert' )

function inspect( object ) {
  process.stdout.write(
    require( 'util' ).inspect( object, {
      colors: true,
      depth: null
    }) + '\n\n'
  )
}

const HDD = '\\\\.\\PhysicalDrive0'
const USB = '\\\\.\\PhysicalDrive1'
const SDC = '\\\\.\\PhysicalDrive2'

var device = new Disk.Device( 1 )
var disk = Disk.fromDevice( device )

// inspect( Disk )
inspect( disk )

// console.log( Device.detectSize( device.fd, device.blockSize ) )

// NOTE:
// Never forget to unmount the device
// after being done using it, to prevent
// file descriptor leakage
device.unmount()
