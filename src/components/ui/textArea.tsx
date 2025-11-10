export function TextArea({
  title,
  placeholder,
  name,
  compulsory,
  error,
  defaultValue="",
  colSpan = "",
  theme = "dark",
}: {
  title: string;
  placeholder: string;
  name: string;
  compulsory?: boolean;
  error?: string;
  defaultValue? : string;
  colSpan?: string;
  theme?: "dark" | "light";
}) {
  return (
    <div className={`space-y-2 ${colSpan}`}>
      <h3 className={`${theme === "dark" ? "text-primary-900" : "text-primary-200"}`}>
        {title} {compulsory && <span className="text-red-600">*</span>}
      </h3>
      <textarea
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        className={`${theme === "dark" ? "border-gray-400  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" : "border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-400 text-white"} w-full p-4 border rounded-md resize-none h-32`}
      />
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
}
