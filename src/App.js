import "./App.css";
import pizza from "./pizza-caprese.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s app</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve {props.adjective} food.</p>
      <img src={pizza} height={200} alt="pizza" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Macaroni", "Spaghetti"];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <>
      <Header name="Manu" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
