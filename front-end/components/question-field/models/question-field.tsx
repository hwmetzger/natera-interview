/**
 * Interface used by the QuestionFieldComponent
 */
interface QuestionFieldComponentProperties {
  id: string;
  title: string;
  description: string;
  label: string;
  onChange?: Function;
}

export default QuestionFieldComponentProperties;
