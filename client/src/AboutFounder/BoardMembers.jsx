import React from 'react';
import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";
import founder3 from "../assets/founder3.png";
import "./AboutFounder.css";
function BoardMembers() {
  const boardMembers = [{
    name: 'Dr J Vijay Venkatraman',
    position: "Founder",
    bio: `MBBS, F. Diab., MBA, FPIPA (UK)<br/> Managing Director & CEO,<br/>Oviya MedSafe`,
    img: founder2
   }, {
    name: 'Dr V Janarthanan',
    position: "Chairman, Oviya MedSafe",
    bio: `MS, FICS, FAIS<br/>Chief Surgeon & Managing Director,<br/> KTVR Group Hospital <br/> Coimbatore, India`,
    img: founder1
   },
   {
    name: 'Dr C J Arun Raja',
    position:"Director, Oviya MedSafe",
    bio: `MS, D. Ortho, DNB (Ortho)<br/> Consultant Orthopaedic Surgeon,<br/> KTVR Group Hospital<br/> Coimbatore, India`,
    img: founder3
   }];

  return (
    <div className='container-fluid p-0 m-0 founderpart'>
      <h1 className='text-center subhead2 pb-3 pt-4'>Our Board</h1>
      <div className='boardpart'>
        <div className='container'>
          <div className='row text-center mx-2  py-5'>
            {boardMembers.map((member, index) => (
              <div className='col-sm-12 col-md-4 my-1' key={index}>
                <div className="card boardcard mx-1 mx-lg-5 border-0 h-100">
                  <img src={member.img} alt={member.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title boardcardtitle">{member.name}</h5>
                    <p className="card-text boardcardposition">{member.position}</p>
                    <p
                      className="card-text memberbio"
                      dangerouslySetInnerHTML={{ __html: member.bio.replace(/(?:\r\n|\r|\n)/g, '<br />') }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardMembers;
