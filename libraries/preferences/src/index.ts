import { createStorage } from '@revenge-mod/storage'

export interface Settings {
    safeMode?: {
        enabled: boolean
        enabledNextLaunch: boolean
    }
    developer: {
        settingsPageShown: boolean
    }
}

export const settings = createStorage<Settings>('revenge/settings.json', {
    initial: {
        safeMode: {
            enabled: false,
            enabledNextLaunch: false,
        },
        developer: {
            settingsPageShown: false,
        },
    },
})

// const plugins = createStorage<Record<string, { url: string, enabled: boolean }>>('revenge/plugins.json', {
//     initial: {},
// })
