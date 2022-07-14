import React from "react"



export default function SelectDevice({ brends }) {
    return (
        <option className="">
            {brends.get("name")}
        </option>

    )
}