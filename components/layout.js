import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Payload Pro' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link prefetch href='/'><a>Home</a></Link> |
        <Link prefetch href='/rtfm'><a>RTFM</a></Link> |
      </nav>
    </header>

    <body>
      {children}
    </body>

    <footer>
      {'footer'}
    </footer>
  </div>
)