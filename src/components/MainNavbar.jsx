theme: {
  extend: {
    keyframes: {
      glow: {
        '0%, 100%': { boxShadow: '0 0 8px #3b82f6, 0 0 12px #1e40af' },
        '50%': { boxShadow: '0 0 12px #3b82f6, 0 0 16px #1e40af' },
      }
    },
    animation: {
      glow: 'glow 2s ease-in-out infinite',
    }
  }
}
