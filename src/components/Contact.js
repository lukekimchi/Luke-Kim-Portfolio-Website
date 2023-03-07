import { Button, Textarea } from "flowbite-react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const formId = "Lq554OQE";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onFormChangeHandler = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      Name: formData.name,
      Email: formData.email,
      Message: formData.message,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      setSubmitted(false);
      alert(error);
    }
  };

  return (
    <div className="p-5">
      {/* Heading */}
      <div className="flex justify-start items-center py-10 px-20">
        <h1>Reach Out.</h1>
      </div>

      {/* Form */}
      <form onSubmit={onSubmitHandler}>
        <div style={{ width: "75%" }} className="m-auto">
          <div className="flex flex-col gap-4 ">
            {/* Name */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" className="font-mono" />
              </div>
              <TextInput
                id="name"
                type="text"
                sizing="md"
                required={true}
                value={formData.name}
                onChange={onFormChangeHandler}
              />
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" className="font-mono" />
              </div>
              <TextInput
                id="email"
                type="text"
                sizing="md"
                required={true}
                value={formData.email}
                onChange={onFormChangeHandler}
              />
            </div>
          </div>
          {/* Message */}
          <div id="textarea" className="my-4">
            <div className="mb-2 block">
              <Label
                htmlFor="message"
                value="Your message"
                className="font-mono"
              />
            </div>
            <Textarea
              id="message"
              required={true}
              rows={4}
              value={formData.message}
              onChange={onFormChangeHandler}
            />
          </div>
          {/* Button */}
          <div className="flex justify-end py-5">
            <Button type="submit" className="">
              Send
            </Button>
          </div>
          {submitted && (
            <div className="flex justify-end m-5 font-mono text-green-400 font-semibold">
              Thanks for your message :)
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
