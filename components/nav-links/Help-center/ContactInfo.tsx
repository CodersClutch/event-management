import { Dot, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="px-[1.5%]">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <p className="text-[#585163] text-[0.9rem]">
            Eventbrite is a self-service platform, which means third party
            organizers create and manage their own events. If you have questions
            about an event, see if the information you need is on the event
            listing. If you don’t find what you’re looking for, select{" "}
            <span className="font-semibold">
              <Link href="#">Contact the organizer</Link>
            </span>{" "}
            on the event listing. If you already have a ticket, you can also
            contact the organizer by going to{" "}
            <span className="font-semibold">
              <Link href="#">Tickets</Link>
            </span>{" "}
            in your Eventbrite account. Eventbrite can&apos;t answer questions
            about an event on the organizer&apos;s behalf.
          </p>
        </div>
        <div className="col-span-1 flex justify-center">
          <div className="border border-gray-200 rounded-md shadow-sm pr-3 py-4 grid grid-cols-3 gap-1">
            <div className="col-span-1 flex justify-center">
              <User className="w-11 h-11 text-blue-600" />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold text-[#1E0A3C]">
                Get help faster
              </h2>
              <p className="text-[#585163] text-[0.9rem] mt-5">
                Log in for resources tailored to <br /> your account, tickets,
                and events.
              </p>
              <button>
                <Link
                  href="#"
                  className="mt-3 inline-block px-8 py-2 bg-[#FEBE20] text-white rounded-md hover:bg-[#fedd20] transition"
                >
                  Log in
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-2xl">In this article</h2>
        <ul className="pl-5 mt-4 text-blue-600 text-[0.9rem]">
          <li>
            <Link href="#">If you already have your ticket</Link>
          </li>
          <li>
            <Link href="#">If you don&apos;t have a ticket</Link>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-2xl">
          If you already have your ticket
        </h2>
        <p className="mt-4 text-[0.9rem] text-[#585163]">
          If you registered for an event and have a ticket in your Eventbrite
          account, you can:
        </p>
        <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
          <li className="mt-4 flex items-center text-[0.9rem]">
            <Dot className="w-7 h-7" />{" "}
            <span className="text-blue-600">
              <Link href="#">Update your order</Link>
            </span>{" "}
            - Update the information on your order (not available for all
            events).
          </li>
          <li className="mt-4 flex items-center text-[0.9rem]">
            <Dot className="w-7 h-7" />{" "}
            <span className="text-blue-600">
              <Link href="#">Request a refund</Link>
            </span>{" "}
            - Send a refund request to the organizer using Eventbrite&apos;s
            refund request form (if enabled).
          </li>
          <li className="mt-4 flex items-center text-[0.9rem]">
            <Dot className="w-7 h-7" />{" "}
            <span className="text-blue-600">
              <Link href="#">Join an online event</Link>
            </span>{" "}
            - If the organizer set up an online event page, you can join the
            online meeting or webinar there.
          </li>
        </ol>
        <p className="mt-4 text-[0.9rem] text-[#585163]">
          If you need help with these steps or have questions about the event,
          you&apos;ll need to contact the organizer:
        </p>
      </div>
      <div className="mt-5">
        <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
          <li className="mt-4">
            1. Log in and go to <span className="font-semibold">Tickets</span>.
          </li>
          <li className="mt-4">2. Select your order.</li>
          <li className="mt-4">
            3. Select{" "}
            <span className="font-semibold">Contact the organizer.</span>
          </li>
          <li className="mt-4">
            4. Review the options available or select{" "}
            <span className="font-semibold">Contact the organizer.</span>
          </li>
          <li className="mt-4">
            5. Fill out the form and select{" "}
            <span className="font-semibold">Continue</span>.
          </li>
          <li className="mt-4">
            6. Review your submission. Then select{" "}
            <span className="font-semibold">Submit request</span>.
          </li>
        </ol>
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-2xl">
          If you don&apos;t have a ticket
        </h2>
        <p className="mt-4 text-[0.9rem] text-[#585163]">
          If you can&apos;t find your ticket or have a question before
          registering, follow these steps:
        </p>
        <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
          <li className="mt-4">1. Go to the event page.</li>
          <li className="mt-4">
            2. Select <span className="font-semibold">Contact</span>, then{" "}
            <span className="font-semibold">Contact the organizer</span>.
          </li>
          <li className="mt-4">
            3. Fill out the form and select{" "}
            <span className="font-semibold">Continue</span>.
          </li>
        </ol>
        <p className="mt-4 text-[0.9rem] text-[#585163]">
          Review your submission. Then select{" "}
          <span className="font-semibold">Submit request</span>.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
