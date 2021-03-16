import "./MyBooks.scss";

import { AppBar } from "../../components/AppBar/AppBar";
import { BookCard } from "../../components/BookCard/BookCard";
import { SortControl } from "../../components/SortControl/SortControl";
import { Button } from "../../components/Button/Button";

export interface IMainProps {}

function MainAppBarRight() {
  return (
    <div className="botes-main-appbar__right">
      <ol>
        <li>
          <a href="/books">My Books</a>
        </li>
      </ol>
    </div>
  );
}

const data = [
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY1xgEsavbaxlb6B1Ivj1gg_9Kn3-3YsgPg&usqp=CAU",
    label: "Mud, Sweat, and Tears"
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY1xgEsavbaxlb6B1Ivj1gg_9Kn3-3YsgPg&usqp=CAU",
    label: "Mud, Sweat, and Tears"
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY1xgEsavbaxlb6B1Ivj1gg_9Kn3-3YsgPg&usqp=CAU",
    label: "Mud, Sweat, and Tears"
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY1xgEsavbaxlb6B1Ivj1gg_9Kn3-3YsgPg&usqp=CAU",
    label: "Mud, Sweat, and Tears"
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY1xgEsavbaxlb6B1Ivj1gg_9Kn3-3YsgPg&usqp=CAU",
    label: "Mud, Sweat, and Tears"
  }
];

export function MyBooks(props: IMainProps) {
  return (
    <div className="botes-page-main">
      <AppBar right={<MainAppBarRight />} />
      <main className="botes-page-my-books__content">
        <div className="botes-page-my-books__content-list-controls">
          <SortControl
            label={"Sort By"}
            options={{
              "1": { label: "Date Added: Desc" },
              "2": { label: "Date Added: Ascen" }
            }}
          />
          <Button label={"Create Note"} />
        </div>
        <ol className="botes-page-my-books__content-list">
          {data.map((book, index) => (
            <li key={index}>
              <BookCard src={book.src} label={book.label} />
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
