import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../course/Course.js";
import bgImage from "./../../assets/images/sectionBg.png";
import Zoom from "react-reveal/Zoom";
import useCourses from "../../hooks/useCourses.js";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <Zoom right cascade>
          <h2 className="text-center text-white mb-0">Our All Courses</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Learn exciting technologies from web development, design, game
            development and more!
          </p>
        </Zoom>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
