import React, {useState} from 'react';

export default function Playground(){
    const state = useState("");
    const text = state[0];
    const setText = state[1];
    const [checked, setChecked] = useState(false)
    return(
        <section>
            <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            />
             <input
            type='checkbox'
            value={checked}
            onChange={e => setChecked(e.target.checked)}
            />
            <ul>
                <li>{text}</li>
                <li>{checked.toString()}</li>
            </ul>
        </section>
    );
}