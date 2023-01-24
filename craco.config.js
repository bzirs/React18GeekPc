const path = require('path')
// import path from 'node:path'

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}

// export default {
//   webpack: {
//     alias: {
//       '@': path.join(__dirname, 'src')
//     }
//   }
// }
