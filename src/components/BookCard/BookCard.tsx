import "./BookCard.scss";

export interface IBookCardProps {
  src: string;
  label: string;
}

export function BookCard(props: IBookCardProps) {
  return (
    <div className="botes-book-card green">
      <img
        className="botes-book-card__image"
        src={props.src}
        alt={props.label}
      />
      <label className="botes-book-card__label">{props.label}</label>
    </div>
  );
}
