import { useEffect, useState } from 'react'

export const ButtonPwa = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      // event.preventDefault() // to hide the notification that asks the user to install the app
      console.log('👍', 'beforeinstallprompt', event)
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true)
    })
  }, [])

  async function downloadApp () {
    console.log('👍', 'butInstall-clicked')
    const promptEvent = window.deferredPrompt
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log('oops, no prompt event guardado en window')
      return
    }
    // Show the install prompt.
    promptEvent.prompt()
    // Log the result
    const result = await promptEvent.userChoice
    console.log('👍', 'userChoice', result)
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null
    // Hide the install button.
    setIsReadyForInstall(false)
  }

  return (
    <section>
      <button
        className={`button-pwa ${isReadyForInstall ? '' : 'hidden'}`}
        onClick={downloadApp}
      >
        Install
      </button>
    </section>
  )
}
