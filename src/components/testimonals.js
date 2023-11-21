import React from "react";
import './testimonals.css'

const Testimonals = () => {
    return (
        <div>
            <div className="features-heading">
                <h1 className="mt-50">Hear what our tenants got to say</h1>
            </div>
            
        <div class="outerdiv">
    <div class="innerdiv">
      <div class="div1 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="" />
          </div>
          <div class="detbox">
            <p class="name">Daniel Clifford</p>
          </div>
        </div>
        <div class="review">
          <h4>I was really nervous about finding a place to live when I first came to college, but I'm so glad I found Raj Homes. They were so helpful and understanding, and they found me the perfect place to live. I've been really happy here ever since.</h4>
        </div>
      </div>
      <div class="div2 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
          </div>
          <div class="detbox">
            <p class="name white">Jonathan Walters</p>
          </div>
        </div>
        <div class="review white">
          <h4>The staff was really friendly and helpful, and the apartment was clean and spacious. I would definitely recommend them to anyone looking for a place.</h4>
        </div>
      </div>
      <div class="div4 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
          </div>
          <div class="detbox">
            <p class="name dark">Jeanette Harmon</p>
          </div>
        </div>
        <div class="review dark">
          <h4>An overall wonderful and rewarding experience</h4>
        </div>
      </div>
      <div class="div5 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
          </div>
          <div class="detbox">
            <p class="name white">Patrick Abrams</p>
          </div>
        </div>
        <div class="review white">
          <h4>I've been living in a rental from Raj Homes for two years now, and I've been really happy with the experience. The apartments are well-maintained, and the staff is always responsive to my needs. I would definitely recommend them to anyone looking for a place to live in Buffalo.</h4>
        </div>
      </div>
    </div>
  </div>
  <p className="testimonals-tag">We are dedicated to providing you with a hassle-free rental experience, ensuring that you focus on what truly matters. Whether you're an individual student or a group of friends searching for the ultimate communal living space, we've got you covered.</p>
  </div>

    )
}

export default Testimonals;