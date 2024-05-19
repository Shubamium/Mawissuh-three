import "./home.scss";
export default function Home() {
  return (
    <main id="page_home">
      <h1 hidden={true}>MARIMANAGEMENT</h1>
      <section className="hero">
        <div className="confine">
          <figure>
            <img src="/graphics/placeholder-logo.png" alt="" className="logo" />
          </figure>
          <article>
            <h2>
              This service is a luxury and{" "}
              <span>NOT a requirement to be a creator!</span>
            </h2>
            <p>
              This is an optional clarity of mind as{" "}
              <b>I will assist you in your content creation</b>, handle your
              scheduling, organize collabs, provide you support and ensure all
              your needs and goals are met!
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
