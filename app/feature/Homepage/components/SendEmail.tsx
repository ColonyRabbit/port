"use client";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { WorldMapDemo } from "./WorldMapDemo";
import { IReqEmail, IResEmail } from "@/app/type/EmailJsType";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdError } from "react-icons/md";

import { Meteors } from "@/components/ui/meteors";
export function SendEmail() {
  useEffect(() => {
    AOS.init();
  }, []);
  const form = useRef<HTMLFormElement | null>(null);
  const [statSend, setStateSend] = useState<boolean>(false);
  const [errorZod, setErrorZod] = useState<z.ZodError<IReqEmail> | null>(null);
  const [data, setData] = useState<IReqEmail>({
    Username: "",
    Useremail: "",
    Message: "",
  });
  const schema = z.object({
    Username: z.string().min(1, { message: "Name is required" }),
    Useremail: z.string().email({ message: "Invalid email address" }),
    Message: z.string().min(1, { message: "Message cannot be empty" }),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorZod(null);
    const validate = schema.safeParse(data);
    if (validate.success) {
      setStateSend(true);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (response: IResEmail) => {
            if (response.status === 200) {
              console.log(response);
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setErrorZod(validate.error);
      console.log(errorZod);
    }
  };

  return (
    <div
      id="Email"
      data-aos="fade-up"
      className="grid grid-cols-1 relative"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div className="w-full flex items-center justify-items-center">
        <div className=" w-full relative flex ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 w-full gap-10  px-4 py-8 h-full overflow-hidden rounded-2xl grid grid-cols-2 max-lg:grid-cols-1 justify-end items-center">
            <div
              data-aos="zoom-out-up"
              className="w-full mx-auto rounded-3xl    p-4 md:p-8  bg-white dark:bg-black"
            >
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                If you are interested
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Way to contact Me
              </p>

              <form ref={form} className="my-8" onSubmit={handleSubmit}>
                <div
                  className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4`}
                >
                  <LabelInputContainer>
                    <Label htmlFor="Username">Who are you</Label>
                    <Input
                      value={data.Username}
                      name="user_name"
                      placeholder="barry allen"
                      type="text"
                      onChange={(e) => {
                        setData({ ...data, Username: e.target.value });
                      }}
                    />
                    {errorZod?.errors.find(
                      (err) => err.path[0] === "Username"
                    ) && (
                      <p className="text-red-500 flex items-center gap-2 text-sm">
                        <MdError />
                        {
                          errorZod.errors.find(
                            (err) => err.path[0] === "Username"
                          )?.message
                        }
                      </p>
                    )}
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="Useremail">Email</Label>
                  <Input
                    value={data.Useremail}
                    onChange={(e) => {
                      setData({ ...data, Useremail: e.target.value });
                    }}
                    name="user_email"
                    placeholder="Your Email"
                    type="email"
                  />
                  {errorZod?.errors.find(
                    (err) => err.path[0] === "Useremail"
                  ) && (
                    <p className="text-red-500 flex items-center gap-2 text-sm">
                      <MdError />
                      {
                        errorZod.errors.find(
                          (err) => err.path[0] === "Useremail"
                        )?.message
                      }
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    className="h-40  rounded-lg border focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 border-gray-300 text-gray-900 text-sm resize-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Message to me"
                    value={data.Message}
                    onChange={(e) => {
                      setData({ ...data, Message: e.target.value });
                    }}
                    name="message"
                  />
                  {errorZod?.errors.find(
                    (err) => err.path[0] === "Message"
                  ) && (
                    <p className="text-red-500 flex items-center gap-2 text-sm">
                      <MdError />
                      {
                        errorZod.errors.find((err) => err.path[0] === "Message")
                          ?.message
                      }
                    </p>
                  )}
                </LabelInputContainer>

                <button
                  disabled={statSend}
                  value="Send"
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  {statSend ? <p>Sended</p> : <p> Send To me &rarr;</p>}
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
              </form>
            </div>
            {statSend ? (
              <div data-aos="flip-left ">
                <WorldMapDemo />
              </div>
            ) : (
              <Image
                data-aos="zoom-out-down"
                src="/Email/email.png"
                width={2000}
                height={2000}
                alt="email"
                className="w-full h-full rounded-3xl"
              />
            )}{" "}
            <Meteors number={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
