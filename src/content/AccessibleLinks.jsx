import posters from "./posters";

export default function AccessibleLinks() {
  return (
    <section className="sr-only">
      <h2>Links</h2>
      {posters.map((poster) => {
        const { id, url, label } = poster;

        if (label && url) {
          return (
            <a key={id} href={url} target="_blank" rel="noopener">
              {label}
            </a>
          );
        }

        if (label && !url) {
          return <p key={id}>{label}</p>;
        }
      })}
    </section>
  );
}
