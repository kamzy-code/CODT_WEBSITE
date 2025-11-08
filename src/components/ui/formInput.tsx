export function FormInput({
  title,
  type,
  placeholder,
  name,
  compulsory,
  error,
  defaultValue = "",
  colSpan = "",
}: {
  title: string;
  type: string;
  placeholder: string;
  name: string;
  compulsory?: boolean;
  error?: string;
  defaultValue?: string;
  colSpan?: string;
}) {
  return (
    <div className={`space-y-2 ${colSpan}`}>
      <h3 className="text-primary-900">
        {title} {compulsory && <span className="text-red-600">*</span>}
      </h3>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        className={`w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
