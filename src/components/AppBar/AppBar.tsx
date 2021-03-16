import "./AppBar.scss";

export interface IAppBarProps {
  right?: JSX.Element;
}

export function AppBar(props: IAppBarProps) {
  return (
    <nav className="botes-nav">
      <div className="botes-nav__logo">
        <img src="https://cdn.iconscout.com/icon/free/png-512/book-1215-453725.png" />
      </div>
      <div className="botes-nav__right">
        {props.right ? props.right : <></>}
      </div>
    </nav>
  );
}
