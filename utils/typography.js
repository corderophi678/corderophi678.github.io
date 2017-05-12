import Typography from 'typography'
import Funston from 'typography-theme-funston'

const typography = new Typography(Funston)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
