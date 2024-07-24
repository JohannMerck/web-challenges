export default function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Weltartikel</h2>
      <label htmlFor="whatever">Hallo</label>
      <input id="whatever" />
      <a
        href="https://de.wikipedia.org/wiki/Walter_Frosch"
        className="article__link"
      >
        Weltlink zum Weltfrosch
      </a>
    </article>
  );
}
