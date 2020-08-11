import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import warningIcon from "../../assets/images/icons/warning.svg";

export default function TeacherForm() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="How amazing that you want to teach!"
        description="The first step is to fill out this registration form."
      />

      <main>
        <fieldset>
          <legend>Type here your informations:</legend>
          <Input name="name" label="Full Name" />
          <Input name="avatar" label="Your Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>About the Classes:</legend>
          <Select
            name="subject"
            label="Subjects"
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Biology", label: "Biology" },
              { value: "Geography", label: "Geography" },
              { value: "Maths", label: "Maths" },
              { value: "English", label: "English" },
              { value: "History", label: "History" },
              { value: "Physics", label: "Physics" },
              { value: "Portuguese", label: "Portuguese" },
              { value: "Chemistry", label: "Chemistry" },
            ]}
          />
          <Input name="cost" label="Price for your hour in your Classes:" />
        </fieldset>

        <fieldset>
          <legend>
          Available Times
            <button type="button">+ New Time</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Week Days"
              options={[
                { value: "0", label: "Sunday" },
                { value: "1", label: "Monday" },
                { value: "2", label: "Tuesday" },
                { value: "3", label: "Wednesday" },
                { value: "4", label: "Thursday" },
                { value: "5", label: "Friday" },
                { value: "6", label: "Saturday" },
              ]}
            />
            <Input name="from" label="From" type="time" />
            <Input name="to" label="To" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Important! <br />
            Fill in all the information
          </p>
          <button type="button">Save and Register</button>
        </footer>
      </main>
    </div>
  );
}