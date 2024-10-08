
export function Elipsis1({ color1, color2}) {
    return (
<svg
    className="blur-2xl"
    width="600" 
    height="100" 
    viewBox="0 0 500 150" 
    xmlns="http://www.w3.org/2000/svg"
>

    <ellipse cx="250" cy="50" rx="300" ry="75" fill="#13D6D6" />
</svg>

    )
}

export function Elipsis2({ color1, color2}) {
    return (
<svg
    className="blur-xl"
    width="500" 
    height="150" 
    viewBox="0 0 500 150" 
    xmlns="http://www.w3.org/2000/svg"
>
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:`${color1}`, stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:`${color2}`,stopOpacity:1}} />
        </linearGradient>
    </defs>

    <ellipse cx="250" cy="75" rx="200" ry="65" fill="url(#grad1)" />
</svg>

    )
}
