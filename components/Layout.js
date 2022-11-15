import Anchor from "./Anchor";

function Layout({ children, navData }) {
  return (
    <>
      <header>
        <main>
          <section className="grid">
            <li>
              <Anchor href="/">Home</Anchor>
            </li>
            {navData.map((entry) => {
              return (
                <article className="product-card" key={entry.slug}>
                  <Anchor href={"/products/" + entry.id}>{entry.productdisplayname}</Anchor>
                </article>
              );
            })}
          </section>
        </main>
      </header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
}

export default Layout;
