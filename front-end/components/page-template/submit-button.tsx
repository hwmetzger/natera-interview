interface SubmitButtonComponentProperties {
  onSubmit: Function;
}

const SubmitButtonComponent = ({
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
        onClick={handleSubmitClick}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButtonComponent;
