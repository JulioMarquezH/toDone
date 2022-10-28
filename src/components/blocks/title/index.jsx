function TitleBlock({ title, tag, isSimpler }) {
  if (isSimpler) {
    return <p className="on-hold">{title}</p>;
  }
  return (
    <div className="tag completed">
      <p className="completed-text">{title}</p>
      {tag && (
        <section className="inactive">
          <p>{tag}</p>
        </section>
      )}
    </div>
  );
}

export default TitleBlock;
