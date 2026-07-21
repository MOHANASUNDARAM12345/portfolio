import React from "react";
import "./Education.css";

import school10 from "./images/school10.jpg";
import school12 from "./images/school12.jpg";
import college from "./images/college.jpg";
import futureJob from "./images/future-job.jpg";

function Education() {
  return (
    <section 
      className="education" 
      id="education"
      data-aos="zoom-in"
    >

      <h2 className="heading">
        My <span>Education</span>
      </h2>

      <div className="table-container">

        <table className="education-table">

          <thead>
            <tr>
              <th>Photo</th>
              <th>Qualification</th>
              <th>Institution</th>
              <th>Details</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <img src={school10} alt="10th" className="table-img" />
              </td>

              <td>SSLC (10th)</td>

              <td>
                Infant Jesus Higher Secondary School
                <br />
                Maravanur,Manapparai
              </td>

              <td>Marks : 413 / 500</td>

              <td>
                <span className="completed">Completed</span>
              </td>
            </tr>

            <tr>
              <td>
                <img src={school12} alt="12th" className="table-img" />
              </td>

              <td>HSC (12th)</td>

              <td>
                St. Antony's Higher Secondary School
                <br />
                Manjampatty,Manapparai
              </td>

              <td>
                Group : Computer Science
                <br />
                Marks : 467 / 600
              </td>

              <td>
                <span className="completed">Completed</span>
              </td>
            </tr>

            <tr>
              <td>
                <img src={college} alt="College" className="table-img" />
              </td>

              <td>B.Tech IT</td>

              <td>
                JJ College of Engineering and Technology
                <br />
                Ammapattai,Trichy
              </td>

              <td>CGPA : 7.61</td>

              <td>
                <span className="studying">Pursuing</span>
              </td>
            </tr>

            <tr>
              <td>
                <img src={futureJob} alt="Future" className="table-img" />
              </td>

              <td>Career Goal</td>

              <td>Aspiring Software Developer</td>

              <td>
                Full Stack Development <br />
                Java Development <br />
                Python Development <br />
                Web Development
              </td>

              <td>
                <span className="career">Ready</span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Education;