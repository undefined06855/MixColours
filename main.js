function blend(colorA, colorB) {
    const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
    const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
    const r = Math.round(rA + (rB - rA) / 2).toString(16).padStart(2, '0');
    const g = Math.round(gA + (gB - gA) / 2).toString(16).padStart(2, '0');
    const b = Math.round(bA + (bB - bA) / 2).toString(16).padStart(2, '0');
    return '#' + r + g + b;
}

const rows = Array.from(document.getElementsByClassName("row"))

function mix()
{
    for (var i = 0; i < rows.length; i++)
    {
        if (i != 0)
        {
            const row = rows[i]
                , prow = rows[i - 1]
                , rowl = row.children.length
    
            for (var c = 0; c < rowl; c++)
            {
                const child = row.children[c]
                    , mix1 = prow.children[c]
                    , mix2 = prow.children[c + 1]
    
                child.value = blend(mix1.value, mix2.value)
            }
        }
    }    
}

document.querySelectorAll("input").forEach(e => e.addEventListener("input", mix))

mix()