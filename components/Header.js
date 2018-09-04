import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/rtfm">
            <a style={linkStyle}>RTFM</a>
        </Link>
        <Link href="/start">
            <a style={linkStyle}>Start</a>
        </Link>
    </div>
)

export default Header