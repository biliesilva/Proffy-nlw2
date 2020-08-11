import React from 'react'
import PageHeader from '../../components/PageHeader';
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import './styles.css';

function TeacherList() {

    return (
      <div className="container" id="page-teacher-list">
        <PageHeader title="These are the avaliables Teachers">
          <form id="search-teachers">
            <Select
              name="subject"
              label="Subject"
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
            <Select
              name="week_day"
              label="Dia da Semana"
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
  
  <Input name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
    )
}

export default TeacherList;