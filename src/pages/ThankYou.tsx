import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Button from '../components/common/Button'

const ThankYouPage = () => {

  return (
    <div className="min-h-screen bg-ink-950 text-ink-50">
      <Header />
      <main className="flex min-h-[calc(100vh-200px)] items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-aurora text-ink-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Thank You!
            </h1>
            <p className="mx-auto max-w-xl text-lg text-ink-200 md:text-xl">
              We will get back to you soon.
            </p>
            <p className="text-ink-300">
              Your registration has been received. We'll be in touch with updates about the waitlist
              and launch information.
            </p>
            <div className="pt-6">
              <Button as="link" to="/preview" variant="primary">
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ThankYouPage
