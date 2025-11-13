"server-only";

import {
  FormEmailData,
  TestimonyEmailData,
  PrayerRequestEmailData,
} from "@/types";
import { sendEmail } from "./emailTransport";

export async function sendPrayerRequestMail(emailData: PrayerRequestEmailData) {
  const subject = "New Prayer Request Submission";
  const text = `New Prayer Request Received

Name: ${emailData.name}
Email: ${emailData.email}
Phone: ${emailData.phone}
Address: ${emailData.address}
City: ${emailData.city}
State: ${emailData.state}
Country: ${emailData.country}

Prayer Request:
${emailData.prayer_request}`;

  const html = `<h2>New Prayer Request Received</h2>
    <p><strong>Name:</strong> ${emailData.name}</p>
    <p><strong>Email:</strong> ${emailData.email}</p>
    <p><strong>Phone:</strong> ${emailData.phone}</p>
    <p><strong>Address:</strong> ${emailData.address}</p>
    <p><strong>City:</strong> ${emailData.city}</p>
    <p><strong>State:</strong> ${emailData.state}</p>
    <p><strong>Country:</strong> ${emailData.country}</p>
    <h3>Prayer Request:</h3>
    <p>${emailData.prayer_request}</p>
    `;

  try {
    await sendEmail(subject, text, html);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send Prayer Request";
    throw new Error(message || "Error sending Prayer Request");
  }
}

export async function sendFirstTimerMail(emailData: FormEmailData) {
  const subject = "New First Timer Submission";
  const text = `New First Timer Submission Received

Name: ${emailData.name}
Email: ${emailData.email}
Phone: ${emailData.phone}
Address: ${emailData.address}
City: ${emailData.city}
State: ${emailData.state}
Country: ${emailData.country}`;

  const html = `<h2>New First Timer Submission Received</h2>
    <p><strong>Name:</strong> ${emailData.name}</p>
    <p><strong>Email:</strong> ${emailData.email}</p>
    <p><strong>Phone:</strong> ${emailData.phone}</p>
    <p><strong>Address:</strong> ${emailData.address}</p>
    <p><strong>City:</strong> ${emailData.city}</p>
    <p><strong>State:</strong> ${emailData.state}</p>
    <p><strong>Country:</strong> ${emailData.country}</p>
    `;

  try {
    await sendEmail(subject, text, html);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send First Timer email";
    throw new Error(message || "Error sending First Timer email");
  }
}

export async function sendAlterCallMail(emailData: FormEmailData) {
  const subject = "New Alter Call Submission";
  const text = `New Alter Call Submission Received

Name: ${emailData.name}
Email: ${emailData.email}
Phone: ${emailData.phone}
Address: ${emailData.address}
City: ${emailData.city}
State: ${emailData.state}
Country: ${emailData.country}`;

  const html = `<h2>New Alter Call Submission Received</h2>
    <p><strong>Name:</strong> ${emailData.name}</p>
    <p><strong>Email:</strong> ${emailData.email}</p>
    <p><strong>Phone:</strong> ${emailData.phone}</p>
    <p><strong>Address:</strong> ${emailData.address}</p>
    <p><strong>City:</strong> ${emailData.city}</p>
    <p><strong>State:</strong> ${emailData.state}</p>
    <p><strong>Country:</strong> ${emailData.country}</p>
    `;

  try {
    await sendEmail(subject, text, html);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send Alter Call email";
    throw new Error(message || "Error sending Alter Call email");
  }
}

export async function sendTestimonyMail(emailData: TestimonyEmailData) {
  const subject = "New Testimony Submission";
  const text = `New Testimony Received

Name: ${emailData.name}
Email: ${emailData.email}
Phone: ${emailData.phone}
Address: ${emailData.address}
City: ${emailData.city}
State: ${emailData.state}
Country: ${emailData.country}

Testimony:
${emailData.testimony}

Uploaded Files:
${emailData.uploaded_urls?.join("\n") || "None"}`;

  const html = `<h2>New Testimony Received</h2>
    <p><strong>Name:</strong> ${emailData.name}</p>
    <p><strong>Email:</strong> ${emailData.email}</p>
    <p><strong>Phone:</strong> ${emailData.phone}</p>
    <p><strong>Address:</strong> ${emailData.address}</p>
    <p><strong>City:</strong> ${emailData.city}</p>
    <p><strong>State:</strong> ${emailData.state}</p>
    <p><strong>Country:</strong> ${emailData.country}</p>
     <h3>Testimony:</h3>
    <p>${emailData.testimony}</p>
    <h3>Uploaded Files:</h3>
    <div>${(emailData.uploaded_urls && emailData.uploaded_urls.map((upload, idx) => `<a href="${upload}" target="_blank">Upload ${idx + 1}</a>`).join("<br/>")) || "None"}</div>
    `;

  try {
    await sendEmail(subject, text, html);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to Testimony email";
    throw new Error(message || "Error sending Testimony email");
  }
}
