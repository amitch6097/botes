import "./Main.scss";

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

export function Main(props: IMainProps) {
  return (
    <div className="botes-page-main">
      <AppBar right={<MainAppBarRight />} />
      <main className="botes-page-main__content"></main>
    </div>
  );
}
