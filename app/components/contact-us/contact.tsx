"use client";
import sendEmail from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

type ContactFormData = {
  data?: unknown;
  error?: string;
};

function Contact() {
  return (
    <section id="contact" className="max-w-[50rem] w-full mb-24 scroll-m-28 sm:mb-40">
      {/* <SectionTitle>Write Your Query</SectionTitle> */}
      <p className="-mt-8 text-center text-gray-700 leading-[1.5] dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@example.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async function send(formData) {
          const { data, error } = await sendEmail(formData);

          console.log("client side", { data, error });

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("email successfully sent");
        }}
        className="flex flex-col gap-3 mt-10 dark:text-black"
      >
        <input
          maxLength={400}
          required
          name="email"
          className="border border-black/10 rounded-lg px-4 py-3 outline-none focus:ring-black focus:ring dark:bg-white/80 dark:focus:bg-white transition dark:ring-0"
          type="email"
          placeholder="Your email"
        />
        <textarea
          required
          maxLength={5000}
          name="message"
          className="border border-black/10 rounded-lg px-4 py-3 outline-none focus:ring-black focus:ring dark:bg-white dark:bg-opacity-80 dark:focus:bg-white transition dark:ring-0"
          id=""
          rows={10}
          placeholder="Your message"
        ></textarea>
        <SubmitButton />
      </form>
    </section>
  );
}

export default Contact;
