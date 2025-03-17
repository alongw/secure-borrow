import express from 'express'
import { config, logger } from '@secure-borrow/common'

logger.info('[Server] Initializing http server...')

const app = express()
const port = config.server.listen_port

app.listen(port, () => {
    logger.info(`[Server] Server listening at http://localhost:${port}`)
})
