export function TextArea({
  title,
  placeholder,
  name,
  compulsory,
  error,
  defaultValue="",
  colSpan = "",
}: {
  title: string;
  placeholder: string;
  name: string;
  compulsory?: boolean;
  error?: string;
  defaultValue? : string;
  colSpan?: string;
}) {
  return (
    <div className={`space-y-2 ${colSpan}`}>
      <h3 className="text-primary-900">
        {title} {compulsory && <span className="text-red-600">*</span>}
      </h3>
      <textarea
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        className={`w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none`}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
