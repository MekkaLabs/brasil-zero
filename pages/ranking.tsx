import Layout from "../components/layout";
import Header from "../components/header";
import Container from '../components/container'
import Head from 'next/head'

export default function Ranking() {
    return (
        <Layout>
            <Head>
                <title>Brasil Zero</title>
            </Head>

            <Container>
                <Header />

                <div className="relative py-16 bg-white overflow-hidden">


                    <div className="relative px-4 sm:px-6 lg:px-8 pb-24">
                        <div className="text-lg max-w-prose mx-auto text-center">
                            <h1 className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                                Brazil 0.0
                            </h1>
                            <p className="mt-8 text-xl leading-8">
                                <span className="text-black"> <strong>Brasil 9.9</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-900"> <strong>Brasil 8.8</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-900"> <strong>Brasil 7.7</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-800"> <strong>Brasil 6.6</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-800"> <strong>Brasil 5.5</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-700"> <strong>Brasil 4.4</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-700"> <strong>Brasil 3.3</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-600"> <strong>Brasil 2.2</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-600"> <strong>Brasil 1.1</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-500"> <strong>Brasil 0.0</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-500"> <strong>Brasil -1.1</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-400"> <strong>Brasil -2.2</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-400"> <strong>Brasil -2.2</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-300"> <strong>Brasil -4.4</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-300"> <strong>Brasil -5.5</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-300"> <strong>Brasil -6.6</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-200"> <strong>Brasil -8.8</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-200"> <strong>Brasil -9.9</strong> - Uma evolução, algo positivo para a nação </span><br />
                                <span className="text-gray-100"> <strong>Brasil -999</strong> - Uma evolução, algo positivo para a nação </span><br />
                            </p>

                        </div>

                    </div>
                </div>

            </Container>
        </Layout>




    )
}