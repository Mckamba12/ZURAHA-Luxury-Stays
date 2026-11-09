import { useState } from "react";

export default function BookingPanel() {
    const [stayType, setStayType] = useState("Hotel");

    const types = ["Hotel", "Villas", "Resorts"];

    return (
        <section className="booking-panel">
            <div className="booking-heading">
                <div>
                    <h2>Luxury Stays</h2>
                    <p>Find your perfect escape.</p>
                </div>

                <div className="Stay-types">
                    {types.map((type) => (
                        <button
                            key={type}
                            type="button"
                            className={
                                stayType === type ? "stay-type active" : "stay-type"
                            }
                            onclick={() => setStayType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <p>Selected stay: {stayType}</p>

            <button
                type="button"
                onclick={() =>
                    alert('Search ${stayType} stays')
                }
            >
                Search Stays
            </button>
        </section>
    );
}