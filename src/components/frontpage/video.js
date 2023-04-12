import React from "react";
import Profileimage from "../../images/profile image.jpg"
const video = () => {


    return (
       <div class="container-sm" >
        <div class="row g-0 bg-light position-relative" style={{marginTop:"32px"}}>
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src={Profileimage} class="w-100" alt="..."/>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0" style={{textAlign:"center"}}>SPONSOR A CHILD  EDUCATION TO CHANGE HIS LIFE</h5>
    <p style={{textAlign:"center"}}>The children welcomed at GANGES have lived for several years in extremely vulnerable conditions. In many cases they were subject to violence, abuse, malnutrition or even murder attempts. When you sponsor a child in Delhi, you show your belief in his potential and capabilities and you empower his self confidence and desire to succeed. If you sponsor a child: </p>
        <p><li>You will receive two letters or drawings of him</li><li>
You can visit him by contacting us</li></p>
<div class="d-grid gap-2 col-6 mx-auto">
<button type="button" class="btn btn-secondary btn-lg" style={{marginTop:"47px"}}>Sponsor A child Education</button>
  
</div>
  </div>
</div>
       </div>
    )}
    export default video