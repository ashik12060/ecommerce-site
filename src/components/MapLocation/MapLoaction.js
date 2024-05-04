import React from 'react'

const MapLoaction = () => {
  return (
    <div>
        <h3 className="text-center fw-bold pb-3 "><span className='border-bottom border-danger border-2'>OUR LOCATION</span></h3>
        <div className="container pb-3">
      <iframe
        title="Medisure Pharma Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.0848693556627!2d90.36864167533575!3d23.74435277867454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf77bcc1799f%3A0xfcad7bb50f341b68!2sMedisure%20Pharma!5e0!3m2!1sen!2sbd!4v1699870642857!5m2!1sen!2sbd"
        width="100%"
        height="500"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  )
}

export default MapLoaction