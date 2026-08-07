import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'w8ngou5u',
    dataset: 'production'
  },
  deployment: {
    appId: 'nsdtuifrczpzwmkrtty8xmee',
    autoUpdates: true,
  },
})
