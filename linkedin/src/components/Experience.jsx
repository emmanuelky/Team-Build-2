import React, { useEffect } from "react";
import { FaPen } from "react-icons/fa";
import {
  fetchdata,
  fetchMyExperience,
  fetchExperiences,
  fetchMe
} from "../functions/fetches";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import Modalbox from "./Modal";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  let { id } = useParams();

  useEffect(async () => {
    // let data;
    console.log("id is: ", id)
    if (id !== undefined) {
      let data = await fetchExperiences(id);
      setExperiences(data)
      console.log("experiences is: ", data)
    } else if (id === undefined) {
      let user = await fetchMe()
      let userExperiences = await fetchExperiences(user._id)
      console.log("experiences is: ", userExperiences)
      setExperiences(userExperiences)
    }
    // else {
    //     data = await fetchMyExperience()
    //     setExperiences(data)
    // }
  }, [id]);

  const fixDate = (date) => {
    try {
      return format(parseISO(date), "yyyy MMMM");
    } catch {
      return `Present`;
    }
  };

  return (
    <div id="experienceDiv" className="d-flex flex-column bg-white border">
      <div className="d-flex justify-content-between ml-4 mx-3">
        <div className="align-self-center mt-4 mt-3">
          <h5>Experiences </h5>
        </div>
        {/* <div id="eduIconColor" className="align-self-center mt-4 mr-3 d-none"><i class="fas fa-plus"></i></div> */}
        {id ? <React.Fragment /> : <Modalbox />}
        {/* <div id="eduIconColor" className="align-self-center mt-4 mr-3 d-block"><i class="fas fa-plus"></i></div> */}
      </div>

      {experiences !== [] && experiences && experiences.map((experience) => (
        <div className="d-flex justify-content-between mx-3 ml-4 mb-4">
          <div className="mt-3">
            <div className="d-flex">
              <img
                id="educationImg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUA/4QNDg4NAAAA/4cA/4oNAAYKhkkIsF0InlQLbTwNAAkNCg0NAAgC9YAE3nUF028KfEMIpFcMPSQNKRoNBgwGxWgLYTYD6XoE5HgNFBEF2XILaDkJjUwMSSoHvGMMUy8IqloJlVAD8H4KgkcMQycHwGYJk08LWTIGy2sNIxgMNiELZDgMMB4NGRMKcz8NHRTWnNHNAAAFiklEQVR4nO2da3vaPAyGW8uhNJzKW0YZpfS0nujG/v+/G1TpBjSJ7NixxPXq/l6uPJH9RJZl9+REURRFURRFURRFURRFURRFURRFURRFURRFURRFUf4XQADcz+4AWHgdLzrNGI/ka7TzaxNEZyBaI8C1yU5D6BmztNwyqoFZboL0ocaFWIkwM3mwwA2mK1Ui5FEEbiQOZc5Fex4+RJF8JTKIMIolcBPEM4lBtJeRxujp1m0EKoRxvBBugnghb5wOYgqUaDb2OuxLf0j+n7AgxrQZRJrZxLQZRJjZxLUZxDxKGqeRbaaQOOOW9Y/YNoPkP8QEMb7NIGYpZSrGtxmkl3ErK2jDZhDTkTFOW7GZQqIIs7HnbdgM0r8REMS2bAaRYDZt2QzSy9gVtmczCL/ZtGgzhcQrXoHtZDO79G9Zg9iuzSDmiXMqtmszSC9nVNi2zSCcNfDWbaaQyGY27dsMknGZTQqbQcw3nqmYwmaQySmLwjQ2g5hnDomJbKaQ+JBeYCqbQbKX5GaTzmYQ85p6nKazmUJhJ7HClDaDCseJFTaymV6/eRPKW1p9jWozmTHTRbchZ4kFNrCZ3FyPrD2abjB/mzGroWWvuLgDd74hNBfHpG+j8N1zFvKXkzyBjl8Ms+mRCfT9VgjbzXUCuj4SJdStvYG3ifsYTZ80RwBe3YPIsfCJgJ262imZUMLJg8ggPzgGkez8sWNjVhLDDPduEqk9zo/xnonstoRTF7Mxz8Szw/ftz0hrgPoAnhyC2H8jntxi8iDzk2lv+3QIR/VPDsPiNclqgPpkRgaR7BK1Pz8XKTJ6Eg6wVHray4lf2MmNRPQkfCXr1YeQKsZf7bwikbkdLGuDmL1TY/RmZyazbhNWYn/UrPV7ZlD/13C294JkHpUZ1gSR/MYNzP4g5+5JKMVeVEokreNLaitzEQKmymyoJQV8+/JyuLYJa6ksSpkutaTof3k3k18CFe58s/cgTy6Vjm9zL1AizEuDSB0Iqagpi1wtl55YI52/ogxCfkJZKCm8kRPKPldNXyJVZ6Fko418zsqkPb+UGET7drCMMmvKZlaVuVDyfUIXDgtv5HK2bnuVzPVYOMhOyFVCbRWLHAAs7D0ymXzZ29pKpJlLHKe7hTdySVG/5hJ6zBkrZijwjpqFlans5y+ILLz9TaPJ41j0mXbhhTdqkeey4yGz8FaUXMjcGXoOhWSZhbfFVmJ+SaVrjy6bAbnIwhtsb/2gnB7qyh67QRRZeJsbY+6oJYVjm4qAw0AlAAypxh7XDSuphTeaK1eBQgtvJLXl1QPY+vND8GulEll4IzisANcz+X50Cu2NX68YmeBKo6Y8XqHw8agUgl179zNK/OpXAXa28hWY/oKagNse7Xztf5Fb8kuGYHnWkO560uCmweQXRcHv5m32xF54KclXwbBIfbwidSUDkh5yYrEZ7971MBjuMnNd2EUSyHAfXdKjajzFtpTHDZkKpumOjHJdt+fXnx8C25WJ8Nu9Pz9IINu1lz79+QFw1vTd+/NDYN2Xce3PD4H3Vk/3cmdzmG9mhV9tmw337bqtmw3/1qF9addsBGz/tms2Ei4PbtdsRFwAvdOTEF+giEu8S1p7Y8FvMwjR7xOAAJtBPDYBvZBgM0hlb2ggImwGgUmDAigtUITNIE4nD32RYjOIy8lDX8TYDBLfbOTYDGKjF/kF2QwCeVyzkWQzCNUF64ksm0H2DkcGI8xmEPqYszvSbAYhjzl7IM5mCpps7ZYLFGczSDSzycU2P0X6N2u5uZKq8MS+RJBocrkCP1KbwNVwZt5l/+NRO5tuu0kasvnT6UimyexgB8vF+rwR6/unwVHcxBfQDXYM8hRFURRFURRFURRFURRFURRFURRFURRFURRFURQlEn8A9uhZWIyTtXAAAAAASUVORK5CYII="
                alt=""
              />
              <div className="m-1 ml-4 d-flex flex-column text-left">
                <h6>{experience.role}</h6>
                <span id="eduFontSize">{experience.company}</span>
                <span id="eduFontSize" className="text-muted">
                  {" "}
                  {fixDate(experience.startDate)} -{" "}
                  {fixDate(experience.endDate)}
                </span>
                <span id="eduFontSize">{experience.description}</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="mb-4">
              {id ? <React.Fragment /> : <Modalbox isEdit={true} experience={experience} />}
              {" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
