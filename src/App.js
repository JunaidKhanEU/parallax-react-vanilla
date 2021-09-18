import { useEffect, useLayoutEffect, useRef, useState } from "react"
import classnames from "classnames"
// import "./App.css"

const images = [0, 1, 2, 3]

const App = () => {
  // const hiddenRef = useRef()
  // const [showStickyHeader, setShowStcikyHeader] = useState(false)
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false
      return map
    }, {})
  )

  useLayoutEffect(() => {
    const handleScroll = () => {
      // if (
      //   window.pageYOffset + window.innerHeight >=
      //   hiddenRef.current?.offsetTop
      // ) {
      //   console.log(`parallax is now visible`)
      //   setShowStcikyHeader(true)
      // }

      const scrollTop = document.documentElement.scrollTop
      const viewportHeight = window.innerHeight

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * viewportHeight
        return map
      }, {})

      setVisibleImagesMap(newVisibleImagesMap)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <div className="parallax">
        <div className="above-content">
          <h1>Welcome To Demo - JK</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
            beatae vel repellendus odit, nulla voluptates quam magni. Adipisci
            quasi corporis cum deleniti debitis quibusdam at maxime expedita id
            omnis.
          </p>
        </div>

        <div className="sticky">
          <div className="frame">
            <header>
              <h1>Welcome Parallex</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                error beatae vel repellendus odit, nulla voluptates quam magni.
                Adipisci quasi corporis cum deleniti debitis quibusdam at maxime
                expedita id omnis.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                error beatae vel repellendus odit, nulla voluptates quam magni.
                Adipisci quasi corporis cum deleniti debitis quibusdam at maxime
                expedita id omnis.
              </p>
            </header>
            {images.map((image) => (
              <div
                className={classnames("image", `image_${image}`, {
                  image_visible: visibleImagesMap[image],
                })}
                key={image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="image_4">
        <div>
          <h1>Enhanced Image</h1>
        </div>
      </div>

      <h1 className="other-content">End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <h1>End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <h1>End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>
      <h1>End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>
      <h1>End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>
      <h1>End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>
      <h1>End Parallex</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
        beatae vel repellendus odit, nulla voluptates quam magni. Adipisci quasi
        corporis cum deleniti debitis quibusdam at maxime expedita id omnis.
      </p>
    </div>
  )
}

export default App
