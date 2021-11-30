import React from "react";

export default function Picker() {
    return (
        <article>
            <label>
                Head:
                <select
                    value={head}
                    onChange={(e) => onHeadChange(e.target.value)}
                ></select>
            </label>
        </article>
    );
}
