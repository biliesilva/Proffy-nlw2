import React from "react";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/61093873?s=460&u=dc050031321f3431c3ff029189651e7bf9d0ec81&v=4"
          alt="Biliane Moreira"
        />
        <div>
          <strong>Biliane Moreira</strong>
          <span>English</span>
        </div>
      </header>
      <p>
        Structured and updated classes..
        <br /> <br />
        Study for entrance exams and proof of foreign language 
        proficiency certification!
      </p>

      <footer>
        <p>
          Price/hour
          <strong>250:-</strong>
        </p>
        
      </footer>
    </article>
  );
}

export default TeacherItem;