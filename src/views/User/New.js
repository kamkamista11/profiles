import React, { Fragment, useState, useRef } from "react";
import {
  validateEmail,
  validatePhoneNumber,
  vlidateDate,
  validateImage,
  validateImageSize
} from "../../utils/custom/validation";
import { setSession } from "../../utils/custom/sessions";
import Form, {
  FormHeader,
  FormSection,
  FormFooter,
  ErrorMessage,
  Field,
} from "@atlaskit/form";
import { DatePicker } from "@atlaskit/datetime-picker";

import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import TextArea from "@atlaskit/textarea";

export const New = (props) => {
  const style = {
    display: "flex",
    width: "400px",
    maxWidth: "100%",
    margin: "0 auto",
    flexDirection: "column",
  };
  const [image, setImage] = useState("");
  const fileInput = useRef("");

  const onChange = () => {
    const {
      current: { files },
    } = fileInput;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    files[0] && reader.readAsDataURL(files[0]);
  };

  const onSubmitHandler = async (data) => {
    const { email, phone, date } = data;
    const {
      current: { files },
    } = fileInput;
    const errors = {
      email: validateEmail(email)
        ? undefined
        : "Wrong email, please make sure it is correct",
      phone: validatePhoneNumber(phone)
        ? undefined
        : "Wrong phone number, please make sure it is correct (e.g. 500400300)",
      date: vlidateDate(date) ? undefined : "Please select date",
      image: validateImage(files[0]) && validateImageSize(files[0])
        ? undefined
        : "Please upload image (max - 300KB)",
    };
    if (!errors.email && !errors.phone && !errors.date && !errors.image) {
      const dataToSave = {
        ...data,
        image,
      };
      setSession("people", dataToSave);
      return props.history.push('/user')
    }
    return errors;
  };
  return (
    <section style={style}>
      <Form onSubmit={onSubmitHandler}>
        {({ formProps }) => (
          <form {...formProps}>
            <FormHeader title="User" />
            <FormSection title="User Data">
              <Field name="name" defaultValue="" label="Name" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} />}
              </Field>
              <Field
                name="lastname"
                defaultValue=""
                label="Last name"
                isRequired
              >
                {({ fieldProps }) => <TextField {...fieldProps} />}
              </Field>
              <Field name="email" defaultValue="" label="Email" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
              <Field name="phone" defaultValue="" label="Phone" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
              <Field name="date" defaultValue="" label="Birthday" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <label>
                     <DatePicker {...fieldProps} id="datepicker" />
                    </label>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
              <Field name="about" defaultValue="" label="About">
                {({ fieldProps }) => <TextArea {...fieldProps} />}
              </Field>
              <Field name="image" defaultValue="" label="Image" isRequired>
                {({ fieldProps, error }) => ( 
                  <Fragment>
                    <input
                      onChange={onChange}
                      ref={fileInput}
                      id="Image"
                      name="Image"
                      type="file"
                      alt="img"
                      accept="image/png, image/jpeg, image/jpg"
                      style={{display: 'flex'}}
                    ></input>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
            </FormSection>
            <FormFooter>
              <Button
                type="submit"
                appearance="primary"
              >
                Submit
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </section>
  );
};
