import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../Components/AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const refForm = useRef();

  // SEND EMAIL  CLICK EVENT
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h7t7s5n",
        "template_ntp9w64",
        refForm.current,
        "T51543OjelUBvzPtj"
      )
      .then(
        function (response) {
          setEmailStatus(
            "MESSAGE SUCCESSLLY SENT!",
            response.status,
            response.text
          );
          setTimeout(() => {
            setEmailStatus("");
          }, 3000);
        },
        function (error) {
          setEmailStatus("MESSAGE FAILED TRY AGAIN...", error);
          setTimeout(() => {
            setEmailStatus("");
          }, 3000);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have any request or question, don't
            hesitate to contact me using the form below.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input
                    type="submit"
                    className=" send-btn flat-button"
                    value="SEND"
                  />
                </li>
              </ul>

              <p className="email-status-text">{emailStatus}</p>
            </form>
          </div>
        </div>

        <div className="map">
          <div className="info-map">
            <h4 className="name">Prince Pal</h4>
            <h4 className="location">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              Gorakhpur, Uttar Pradesh
            </h4>
            <a href="mailto:pal265354@gmail.com" className="email">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              pal265354@gmail.com
            </a>
          </div>
          <div className="map-wrapper">
            <MapContainer center={[26.765844, 83.364944]} zoom={38}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[26.765844, 83.364944]}>
                <Popup>Prince lives here. Come over for a cup of tea 😊</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
