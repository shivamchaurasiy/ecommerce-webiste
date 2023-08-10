import Header from './Header'
import Footer from './Footer'
import './css/Contact.css'
const Contact = () => {
  return (
    <>
      <Header />
    
      <form>

      <h1 align="center">Get in Touch</h1>
      <input type="text" class="form-control form-control-lg mt-4" placeholder="Name" name="name" />
      <input type="text" class="form-control form-control-lg mt-3 mb-3" placeholder="Email" name="email"/>
        <input type="text" class="form-control form-control-lg" placeholder="Phone Number" name="phonenumber"/>
          <textarea class="form-control form-control-lg mt-3 mb-3" name="textarea" id="comment" cols="30" rows="5"
            placeholder="Comment"></textarea>
          <div class="row">
            <div class="col mb-3">
              <input type="submit" class="btn btn-primary" value="Send Message" />
            </div>
          </div>
      </form>
    
        <Footer />
      </>
      )
}

export default Contact