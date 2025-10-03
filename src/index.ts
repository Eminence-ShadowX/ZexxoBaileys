// Tambahkan di bagian paling atas
import chalk from "chalk"

console.log(chalk.hex("#a020f0")("════════════════════════════════════"))
console.log(chalk.hex("#a020f0")("     THANK YOU FOR USING BAILEYS BY ZEXXO\n TELEGRAM ZEXXO : @xyzexxo   "))
console.log(chalk.hex("#a020f0")("════════════════════════════════════"))
import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
