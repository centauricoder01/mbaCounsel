import React from 'react'
import "./MostPopulerCollege.css"

const PopulerCollge = () => {
  return (
 <>
 <div className="Symbiosis-International-University">
    <div className="icon-and-aply">
        <div className="icon-of-college">
            <img src={require("../../Assets/Symbiosis_international_university.png")} alt="university-icon " className='university-icon' />
            <div className='name-of-university'>
            <h4>Symbiosis International University</h4> 
            <p>Pune, Maharashtra</p><hr /></div>
        </div>
        <div className="apply-of-college">
            <button className='apply-now-button'>Apply Now</button>
            <button className='counsoult-button'>Counsult</button>
            <img src={require("../../Assets/bookmark_image.png")} alt="" className='book-mark-image' />
        </div>
    </div>
    <div className="para-of-college">Symbiosis International University (SIU), based in Pune, offers an MBA Entrepreneurship specialisation and is a pioneer in offering excellent education with worldwide exposure. It is the best-ranked university in the country. This university offers studies at the graduate, postgraduate, and diploma levels. Symbiosis International Institute provides Distance Learning Education in addition to conventional courses.</div>
    <div className="establishment-of-college">Entrance Exam: SET, SNAP | Fee Structure: Rs 7.8 lakhs (approx) |  Duration : 2 years </div>
 </div>
{/* -------------------------end of Symbiosis-International-University college----------------  */}


<div className="Symbiosis-International-University">
    <div className="icon-and-aply">
        <div className="icon-of-college">
            <img src={require("../../Assets/Symbiosis_international_university.png")} alt="university-icon " className='university-icon' />
            <div className='name-of-university'>
            <h4>Symbiosis International University</h4> 
            <p>Pune, Maharashtra</p><hr /></div>
        </div>
        <div className="apply-of-college">
            <button className='apply-now-button'>Apply Now</button>
            <button className='counsoult-button'>Counsult</button>
            <img src={require("../../Assets/bookmark_image.png")} alt="" className='book-mark-image' />
        </div>
    </div>
    <div className="para-of-college">Symbiosis International University (SIU), based in Pune, offers an MBA Entrepreneurship specialisation and is a pioneer in offering excellent education with worldwide exposure. It is the best-ranked university in the country. This university offers studies at the graduate, postgraduate, and diploma levels. Symbiosis International Institute provides Distance Learning Education in addition to conventional courses.</div>
    <div className="establishment-of-college">Entrance Exam: SET, SNAP | Fee Structure: Rs 7.8 lakhs (approx) |  Duration : 2 years </div>
 </div>

{/* -------------------------end fo second college----------------------------- */}

{/* ----------------------next and preview button bar--------------------- */}
<div className='buttons-to-see-next-populer-college' >
    <button>prev</button>
    <button>01</button>
    <button>02</button>
    <button>03</button>
    <button>Next</button>
</div>

 </>
  )
}

export default PopulerCollge;
