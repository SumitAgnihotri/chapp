import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
})

export default function Home() {
  
  return (
    <div className="container">
      <div className="chat-wrapper">
        <h1 className="top-heading">Welcome to Chatter box</h1>
        <div className="chat-container">
          <Chat />
        </div>
      </div>

      <footer className="footer">
        <div className="top-footer">
          <span>Powered by&nbsp;<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>&nbsp;and&nbsp;<a href="https://ably.com" rel="noopener noreferrer">Ably</a></span>
          <a href="https://github.com/SumitAgnihotri/chapp" target="_blank" className="github-corner" aria-label="View source on GitHub">
            <Image src ="/github_logo.png" alt="github logo" width={50} height={50}/>
          </a>
        </div>
        <div className="top-footer">
          <span>Developed by : </span>
          <a href="https://github.com/SumitAgnihotri/chapp" target="_blank"> Ashish Agnihotri</a>
        </div>
      </footer>
    </div>
  )
}