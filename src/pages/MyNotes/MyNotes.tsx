export interface IMyNotesProps {}

export function MyNotes() {
  return (
    <div className="botes-page-main">
      <AppBar right={<MainAppBarRight />} />
      <main className="botes-page-my-books__content">
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
