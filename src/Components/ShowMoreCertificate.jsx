import React from 'react'
import { useEffect, useRef } from 'react';
import { MdOutlineClose } from "react-icons/md";
const ShowMoreCertificate = ({ CertificateArr, ShowCertificate, setShowCertificate }) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCertificate(!ShowCertificate);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ShowCertificate]);

  return (
    <div id="ShowMoreCertificate">
      <div id='ShowMoreCertificateInner'  ref={ref}>
      <MdOutlineClose id='closeBTN' onClick={()=>setShowCertificate(!ShowCertificate)}/>
        <h2>Certificates</h2>
        <div id="All-Certificate">
          {
            CertificateArr.map((curr, ids) => {
              return <a href={curr.Link} target='_blank'><img src={curr.Image} key={ids} alt="Certificate" /></a>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShowMoreCertificate