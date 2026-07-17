/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			lime: {
  				electric: '#4ADE80',
  			},
  			forest: {
  				deep: '#0A0E0B',
  				shadow: '#2D4F1E',
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			heading: ['var(--font-heading)'],
  			body: ['var(--font-body)'],
  			display: ['var(--font-display)'],
  			mono: ['var(--font-mono)']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { opacity: '0.4' },
  				'50%': { opacity: '1' }
  			},
  			'leaf-sway': {
  				'0%, 100%': { transform: 'rotate(-3deg) translate(-2px, -1px)' },
  				'50%': { transform: 'rotate(3deg) translate(2px, 1px)' }
  			},
  			'dew-drip': {
  				'0%, 38%': { opacity: '1', transform: 'translate(0px, 0px) scale(1)' },
  				'44%': { opacity: '1', transform: 'translate(0px, 4px) scaleY(1.18) scaleX(0.88)' },
  				'52%': { opacity: '1', transform: 'translate(0px, 20px) scaleY(1.2) scaleX(0.85)' },
  				'62%': { opacity: '0.8', transform: 'translate(0px, 80px) scale(0.7)' },
  				'72%': { opacity: '0', transform: 'translate(0px, 140px) scale(0.55)' },
  				'80%': { opacity: '0', transform: 'translate(0px, 0px) scale(1)' },
  				'88%, 100%': { opacity: '1', transform: 'translate(0px, 0px) scale(1)' }
  			},
  			'dew-breathe': {
  				'0%, 100%': { transform: 'scale(1)' },
  				'50%': { transform: 'scale(1.03)' }
  			},
  			'dew-shimmer': {
  				'0%, 100%': { opacity: '0.45', transform: 'translate(-15%, -15%) scale(1)' },
  				'50%': { opacity: '1', transform: 'translate(10%, 5%) scale(1.15)' }
  			}
  			},
  			animation: {
  				'accordion-down': 'accordion-down 0.2s ease-out',
  				'accordion-up': 'accordion-up 0.2s ease-out',
  				'float': 'float 6s ease-in-out infinite',
  				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
  				'leaf-sway': 'leaf-sway 7s ease-in-out infinite',
  				'dew-drip': 'dew-drip 8s ease-in-out infinite',
  				'dew-breathe': 'dew-breathe 10s ease-in-out infinite',
  				'dew-shimmer': 'dew-shimmer 4s ease-in-out infinite'
  			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
