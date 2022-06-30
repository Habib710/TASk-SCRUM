import { Carousel } from '3d-react-carousal'
import './Myapp.css'

const MyApp = () => {
  let slides = [
    <div className="text-center mx-auto p-lg-4 main-card-comment">
      <div className="img-comment mx-auto my-4"></div>
         <div className='p-div-comment'>
      <p className="text-center">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <h4>Md. Danish Ansari</h4>
      <p>Learner, Govt. Employee @UPPCL</p>
      </div>
    </div>,
    <div className="text-center mx-auto p-4 main-card-comment">
      <div className="img-comment2 mx-auto my-4"></div>

      <p className="text-center">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <h4>Md. Danish Ansari</h4>
      <p>Learner, Govt. Employee @UPPCL</p>
    </div>,
    <div className="text-center mx-auto p-4 main-card-comment">
      <div className="img-comment3 mx-auto my-4"></div>

      <p className="text-center">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <h4>Md. Danish Ansari</h4>
      <p>Learner, Govt. Employee @UPPCL</p>
    </div>,
  ]

  return <Carousel slides={slides} />
}

export default MyApp
