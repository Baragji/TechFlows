'use client'

import React, { useEffect } from 'react'

const AxeReporter = () => {
  useEffect(() => {
    if (
      // eslint-disable-next-line no-restricted-globals
      typeof window !== 'undefined' &&
      process.env.NODE_ENV !== 'production'
    ) {
      const initAxe = async () => {
        try {
          const axe = await import('@axe-core/react')
          const ReactDOM = await import('react-dom')

          axe.default(React, ReactDOM, 1000)

          // eslint-disable-next-line no-console
          console.log('🔍 Axe-core accessibility monitoring enabled')
        } catch (error) {

          console.warn('Failed to initialize axe-core:', error)
        }
      }

      initAxe()
    }
  }, [])

  return null
}

export default AxeReporter
