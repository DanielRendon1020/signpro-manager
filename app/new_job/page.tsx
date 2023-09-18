"use client";

import { Metadata } from "next";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
  Datepicker,
} from "flowbite-react";

export const metadata: Metadata = {
  title: "New Job",
};

export default function NewJob() {
  return (
    <form className="flex max-w-xl flex-col gap-4 mx-auto mt-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="project-name">
            <span className="text-orange-500">*</span>Project Name
          </Label>
        </div>
        <TextInput id="project-name" required type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address">
            <span className="text-orange-500">*</span>Address
          </Label>
        </div>
        <TextInput id="address" required type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="client-name">
            <span className="text-orange-500">*</span>Client's Name
          </Label>
        </div>
        <TextInput id="client-name" required type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="client-email">
            <span className="text-orange-500">*</span>Client's Email
          </Label>
        </div>
        <TextInput id="client-email" required type="email" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="client-number" value="Client's Number" />
        </div>
        <TextInput id="client-number" placeholder="000-000-0000" type="tel" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="design-file" />
        <Label htmlFor="design-file" value="Design File" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="invoice" />
        <Label htmlFor="invoice">Invoice</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="install" />
        <Label htmlFor="install" value="Install Date" />
      </div>
      <Datepicker id="install-date" disabled />
      <div>
        <Label htmlFor="notes" value="Notes" />
        <Textarea id="notes" />
      </div>
      <Button type="submit" pill>
        Submit
      </Button>
    </form>
  );
}
