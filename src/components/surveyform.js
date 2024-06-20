import React, { useState } from "react";
import styled from "styled-components";

// Simulated additional questions based on survey topic
const additionalQuestionsData = {
  Technology: [
    "Which programming language are you most comfortable with?",
    "How many years of experience do you have in programming?",
    "What is your preferred IDE or code editor?",
  ],
  Health: [
    "How often do you exercise per week?",
    "What type of exercise do you enjoy the most?",
    "Do you follow any specific dietary restrictions?",
  ],
  Education: [
    "What is your highest level of education completed?",
    "What was your favorite subject in school?",
    "Did you participate in any extracurricular activities?",
  ],
};

// Styled components
const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 5px 0 0 0;
`;

// Validation function
function validate(values) {
  let errors = {};
  if (!values.fullName) {
    errors.fullName = "Full Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.surveyTopic) {
    errors.surveyTopic = "Survey Topic is required";
  }
  if (values.surveyTopic === "Technology") {
    if (!values.favoriteProgrammingLanguage) {
      errors.favoriteProgrammingLanguage =
        "Favorite Programming Language is required";
    }
    if (!values.yearsOfExperience) {
      errors.yearsOfExperience = "Years of Experience is required";
    }
  }
  if (values.surveyTopic === "Health") {
    if (!values.exerciseFrequency) {
      errors.exerciseFrequency = "Exercise Frequency is required";
    }
    if (!values.dietPreference) {
      errors.dietPreference = "Diet Preference is required";
    }
  }
  if (values.surveyTopic === "Education") {
    if (!values.highestQualification) {
      errors.highestQualification = "Highest Qualification is required";
    }
    if (!values.fieldOfStudy) {
      errors.fieldOfStudy = "Field of Study is required";
    }
  }
  if (!values.feedback || values.feedback.length < 50) {
    errors.feedback = "Feedback is required and must be at least 50 characters";
  }
  return errors;
}

const SurveyForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  // Function to handle form changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Simulate fetching additional questions based on survey topic
      if (values.surveyTopic) {
        // Fetch additional questions from simulated API
        fetchAdditionalQuestions(values.surveyTopic)
          .then((questions) => {
            setAdditionalQuestions(questions);
          })
          .catch((error) => {
            console.error("Error fetching additional questions:", error);
          });
      }
    }
  };

  // Simulated API call to fetch additional questions based on survey topic
  const fetchAdditionalQuestions = (surveyTopic) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (additionalQuestionsData.hasOwnProperty(surveyTopic)) {
          resolve(additionalQuestionsData[surveyTopic]);
        } else {
          reject(new Error("Additional questions not found"));
        }
      }, 500); // Simulate delay
    });
  };

  return (
    <div>
      <h1>Survey Form</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Survey Topic</Label>
          <Select
            name="surveyTopic"
            value={values.surveyTopic}
            onChange={handleChange}
          >
            <option value="">Select a topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </Select>
          {errors.surveyTopic && (
            <ErrorMessage>{errors.surveyTopic}</ErrorMessage>
          )}
        </FormGroup>

        {values.surveyTopic === "Technology" && (
          <div>
            <h2>Technology Section</h2>
            <FormGroup>
              <Label>Favorite Programming Language</Label>
              <Select
                name="favoriteProgrammingLanguage"
                value={values.favoriteProgrammingLanguage}
                onChange={handleChange}
              >
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </Select>
              {errors.favoriteProgrammingLanguage && (
                <ErrorMessage>
                  {errors.favoriteProgrammingLanguage}
                </ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Years of Experience</Label>
              <Input
                type="number"
                name="yearsOfExperience"
                value={values.yearsOfExperience}
                onChange={handleChange}
              />
              {errors.yearsOfExperience && (
                <ErrorMessage>{errors.yearsOfExperience}</ErrorMessage>
              )}
            </FormGroup>
          </div>
        )}

        {values.surveyTopic === "Health" && (
          <div>
            <h2>Health Section</h2>
            <FormGroup>
              <Label>Exercise Frequency</Label>
              <Select
                name="exerciseFrequency"
                value={values.exerciseFrequency}
                onChange={handleChange}
              >
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </Select>
              {errors.exerciseFrequency && (
                <ErrorMessage>{errors.exerciseFrequency}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Diet Preference</Label>
              <Select
                name="dietPreference"
                value={values.dietPreference}
                onChange={handleChange}
              >
                <option value="">Select diet</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </Select>
              {errors.dietPreference && (
                <ErrorMessage>{errors.dietPreference}</ErrorMessage>
              )}
            </FormGroup>
          </div>
        )}

        {values.surveyTopic === "Education" && (
          <div>
            <h2>Education Section</h2>
            <FormGroup>
              <Label>Highest Qualification</Label>
              <Select
                name="highestQualification"
                value={values.highestQualification}
                onChange={handleChange}
              >
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </Select>
              {errors.highestQualification && (
                <ErrorMessage>{errors.highestQualification}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Field of Study</Label>
              <Input
                type="text"
                name="fieldOfStudy"
                value={values.fieldOfStudy}
                onChange={handleChange}
              />
              {errors.fieldOfStudy && (
                <ErrorMessage>{errors.fieldOfStudy}</ErrorMessage>
              )}
            </FormGroup>
          </div>
        )}

        <FormGroup>
          <Label>Feedback</Label>
          <Textarea
            name="feedback"
            value={values.feedback}
            onChange={handleChange}
          ></Textarea>
          {errors.feedback && <ErrorMessage>{errors.feedback}</ErrorMessage>}
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>

      {additionalQuestions.length > 0 && (
        <div>
          <h2>Additional Questions</h2>
          <ul>
            {additionalQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
