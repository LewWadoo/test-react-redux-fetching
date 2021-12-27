import './Button.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isAlarm?: boolean;
}

function Button({ label, onClick, isAlarm = false }: ButtonProps): JSX.Element {
  const BASE_CLASS = 'button';
  let classes = `${BASE_CLASS}`;
  classes += isAlarm ? ` ${classes}--alarm` : '';

  return (
    <input
      type="button"
      className={classes}
      value={label}
      onClick={onClick}
      autoFocus={false}
    />
  );
}

export default Button;
