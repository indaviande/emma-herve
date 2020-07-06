let defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
	prefix: '',
	important: false,
	separator: ':',
	theme: {
		colors: {
			yellow: {
				300: '#FEF0A5',
				500: '#FFDFAF'
			},
			blue: {
				300: '#ACE0F5',
				500: '#0596DE'
			},
			beige: '#FBF5F1',
			pink: {
				300: '#F7DBD1',
				500: '#FFBFA8',
				700: '#FFA788'
			},
			dark: '#4F4C6E',
			white: '#FFFFFF'
		},
		spacing: {
			px: '1px',
			'0': '0',
			'1': '0.25rem',
			'2': '0.5rem',
			'3': '0.75rem',
			'4': '1rem',
			'5': '1.25rem',
			'6': '1.5rem',
			'8': '2rem',
			'10': '2.5rem',
			'11': '2.75rem',
			'12': '3rem',
			'16': '4rem',
			'20': '5rem',
			'24': '6rem',
			'32': '8rem',
			'36': '9rem',
			'40': '10rem',
			'48': '12rem',
			'56': '14rem',
			'64': '16rem',
			'72': '18rem',
			'88': '22rem',
			'100': '25rem',
			'120': '30rem',
			'128': '32rem'
		},
		maxWidth: {
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			'8xl': '90rem',
			full: '100%'
		},
		screens: {
			sm: '360px',
			md: '576px',
			lg: '960px',
			xl: '1600px'
		},
		fontFamily: {
			sans: ['Roboto', 'Helvetica Neue', 'sans-serif'],
			serif: ['Lucida', 'Georgia', 'serif'],
			mono: ['Courier New', 'monospace']
		},
		textColor: theme => theme('colors'),
		backgroundColor: theme => theme('colors'),
		borderColor: theme => theme('colors'),
		zIndex: {
			auto: 'auto',
			'0': 0,
			'1': 1,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'10': 10,
			'20': 20,
			'30': 30,
			'40': 40,
			'50': 50,
			'999': 999
		},
		opacity: {
			'0': '0',
			'10': '.1',
			'25': '.25',
			'50': '.5',
			'75': '.75',
			'90': '.9',
			'95': '.95',
			'100': '1'
		},
		fill: theme => ({
			current: 'currentColor'
		}),
		stroke: {
			current: 'currentColor'
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal'
		},
		inset: {
			'0': '0',
			auto: 'auto'
		},
		container: {
			center: true,
			padding: '2rem'
		}
	},
	variants: {
		backgroundAttachment: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderColor: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive', 'hover'],
		borderStyle: ['responsive', 'hover'],
		borderWidth: ['responsive', 'hover'],
		cursor: ['responsive'],
		display: ['responsive'],
		flexDirection: ['responsive'],
		flexWrap: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		justifyContent: ['responsive'],
		alignContent: ['responsive'],
		flex: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		order: ['responsive'],
		fontWeight: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		negativeMargin: ['responsive'],
		opacity: ['responsive', 'hover'],
		outline: ['focus'],
		overflow: ['responsive'],
		padding: ['responsive'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		inset: ['responsive'],
		resize: ['responsive'],
		boxShadow: ['responsive', 'hover', 'focus'],
		fill: ['responsive', 'hover', 'focus'],
		stroke: ['responsive', 'hover', 'focus'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'hover', 'focus'],
		fontSize: ['responsive'],
		fontStyle: ['responsive', 'hover', 'focus'],
		fontSmoothing: ['responsive', 'hover', 'focus'],
		textDecoration: ['responsive', 'hover', 'focus'],
		textTransform: ['responsive', 'hover', 'focus'],
		letterSpacing: ['responsive'],
		verticalAlign: ['responsive'],
		whitespace: ['responsive'],
		wordBreak: ['responsive'],
		width: ['responsive'],
		zIndex: ['responsive']
	},
	corePlugins: {
		appearance: false,
		borderCollapse: false,
		float: false,
		fontFamily: false,
		objectFit: false,
		objectPosition: false,
		tableLayout: false,
		userSelect: false,
		visibility: false
	},
	plugins: []
};
