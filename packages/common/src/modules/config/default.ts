export interface Config {
    server: {
        listen_port: number
    }
}

export const defaultConfig: Config = {
    server: {
        listen_port: 10620
    }
}
