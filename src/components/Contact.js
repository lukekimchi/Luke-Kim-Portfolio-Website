import { Button, Textarea } from "flowbite-react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="animate-text bg-gradient-to-r from-amber-800 via-red-600 to-amber-500 bg-clip-text text-transparent">
          Reach out!
        </h1>
      </div>

      <div style={{ width: "75%" }} className="m-auto">
        <div className="flex flex-col gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" className="font-mono" />
            </div>
            <TextInput id="name" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Email" className="font-mono" />
            </div>
            <TextInput id="base" type="text" sizing="md" />
          </div>
        </div>

        <div id="textarea" className="my-4">
          <div className="mb-2 block">
            <Label
              htmlFor="comment"
              value="Your message"
              className="font-mono"
            />
          </div>
          <Textarea
            id="comment"
            placeholder="Get in touch with me..."
            required={true}
            rows={4}
          />
        </div>
        <div className="flex justify-center">
          <Button gradientMonochrome="purple">Send</Button>
        </div>
      </div>
    </>
  );
}

export default Contact;
