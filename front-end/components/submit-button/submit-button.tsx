import SubmitButtonComponentProperties from "./models/submit-button";

/**
 * This is a reusable button component. (Dumb Component)
 * @param params <SubmitButtonComponentProperties>
 * @returns React.ReactElement
 */
export const SubmitButtonComponent = ({
  onSubmit,
}: SubmitButtonComponentProperties): React.ReactElement => {
  const handleSubmitClick = () => {
    onSubmit();
  };

  return (
    <div className="text-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        data-testid="submit-button"
        onClick={handleSubmitClick}
      >
        Submit
      </button>
    </div>
  );
};
