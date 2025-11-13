"use client";
import Form from "next/form";
import { FormInput } from "../ui/formInput";
import { useActionState } from "react";
import { AlterCallFormState, submitAlterCallForm } from "@/app/action/alter-call";
import { XCircle } from "lucide-react";

export function AlterCallForm() {
  const initialFormState: AlterCallFormState = {
    success: false,
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    submitAlterCallForm,
    initialFormState
  );

  return (
    <Form action={formAction} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <FormInput
          title="Full Name"
          type="text"
          placeholder="Full Name"
          name="name"
          colSpan="md:col-span-2"
          compulsory
          error={state?.errors?.name}
          defaultValue={state?.values?.name}
        />

        <FormInput
          title="Email"
          type="email"
          placeholder="Email"
          name="email"
          compulsory
          error={state?.errors?.email}
          defaultValue={state?.values?.email}
        />

        <FormInput
          title="Phone/Mobile"
          type="text"
          placeholder="Phone"
          name="phone"
          compulsory
          error={state?.errors?.phone}
          defaultValue={state?.values?.phone}
        />

        <FormInput
          title="Address"
          type="text"
          placeholder="Address"
          name="address"
          compulsory
          error={state?.errors?.address}
          defaultValue={state?.values?.address}
        />

        <FormInput
          title="City"
          type="text"
          placeholder="City"
          name="city"
          compulsory
          error={state?.errors?.city}
          defaultValue={state?.values?.name}
        />

        <FormInput
          title="State"
          type="text"
          placeholder="State"
          name="state"
          compulsory
          error={state?.errors?.state}
          defaultValue={state?.values?.state}
        />

        <FormInput
          title="Country"
          type="text"
          placeholder="Country"
          name="country"
          compulsory
          error={state?.errors?.country}
          defaultValue={state?.values?.country}
        />

        <button
          className="btn-primary hover:bg-red-600 active:bg-red-600 h-12 md:col-span-2 disabled:bg-gray-200 disabled:text-dark"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Let's Get You Started"}
        </button>

        {state?.success && (
            <div className="text-green-600 w-full text-center flex items-center justify-center md:col-span-2">✓ Your request has been submitted successfully!</div>
        )}

        {!state?.success && state.errors?.submitError && (
          <div className="text-red-600 w-full text-center flex items-center justify-center md:col-span-2">
            <XCircle className="text-red-600 mr-2 w-4 h-4" />
            {state.errors.submitError}
          </div>
        )}
      </div>
    </Form>
  );
}
