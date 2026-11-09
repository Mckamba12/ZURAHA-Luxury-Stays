import BookingPanel from "./components/BookingPanel";

export default function App() {
    return (
        <main>
            <header>
                <h1>Zuraha</h1>
            </header>
        
            <section className="hero">
                <h2>Where Luxury Meets the Extraordinary</h2>
                <BookingPanel />
            </section>
        </main>
    );
}