import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WILL SCHILLER - Engineering</title>
        <link rel="icon" href="/favicon.ico" />




        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap" rel="stylesheet"/> 

      </Head>

      <main>
        <h1 className="title">
          WILL SCHILLER
        </h1>
        <h2 className='title2'>Web3 & Ethereum</h2>
        <div className='tree'>

        <Link  href='https://www.linkedin.com/in/willschiller/' passHref>
        <a target='_blank'><div className='button1'>Linkedin</div></a>
        </Link>
        <Link href='https://github.com/WillSchiller/' passHref>
        <a target='_blank'><div className='button1'>Github</div></a>
        </Link>
        <Link href='https://www.defidata.dev/' passHref>
        <a target='_blank'><div className='button1'>DefiData</div></a>
        </Link>
        <Link href='https://twitter.com/willschiller' passHref>
        <a target='_blank'><div className='button1'>Twitter</div></a>
        </Link>
        <Link href='https://docs.google.com/document/d/1umHAk073lqhFQ6TxY147AtXA_eqQ5amZsIX_-AxrHi4/edit?usp=sharing' passHref>
        <a target='_blank'><div className='button1'>Résumé</div></a>
        </Link>
          <Link href='mailto:will.schiller@protonmail.com' passHref>
        <a target='_blank'><div className='button1'>Email</div></a>
        </Link>
        <Link href='https://calendly.com/willschiller' passHref>
        <a target='_blank'><div className='button1'>Schedule A Call</div></a>
        </Link>


       
        </div>
         
     

    
      </main>

      

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f8dd74;
        }
        main {
          font-family: sora;
          color: #285955;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }

        .title2 {
          margin: 0;
          line-height: 1;
          font-size: 2.45rem;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        h2 {
          color: #000100;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

