import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Gostaria de Falar.
          </h3>
          <a
            href="mailto:brazilzero@gmail.com"
            className="mx-3 bg-black hover:bg-gray-300 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Email
          </a>
          <a
            href={`https://twitter.com/comancher`}
            className="bg-white hover:bg-gray-500 text-black hover:text-white border border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Twitter
          </a>
          <div className="flex flex-col lg:flex-row text-center items-center lg:pl-4 lg:w-1/2">
            <p><strong>Doar ETH/BNB:</strong> 0x4cd5E32c94d83f32b575b5719D3099b2b65461B3</p>
          </div>
          <div className="flex flex-col lg:flex-row text-center items-center lg:pl-4 lg:w-1/2">
            <p><strong>Doar ETH/BNB:</strong> 0x4cd5E32c94d83f32b575b5719D3099b2b65461B3</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
