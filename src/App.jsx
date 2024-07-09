import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'

function App() {

  return (
    <>
        <Header/>
      <div className="flex min-h-screen flex.col font-mono bg-[url('https://npr.brightspotcdn.com/dims4/default/1cc5164/2147483647/strip/true/crop/5472x3648+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fe4%2F0b%2F93507b27452596142158ba54c42a%2Fshutterstock-193491221.jpg')] bg-cover ">
        <Content />
      </div>
        <Footer />
    </>
  )
}

export default App
