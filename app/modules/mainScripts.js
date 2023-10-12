// // Select object in document
// const select = obj => document.querySelector(obj)

// // Select all objects in document
// const selectAll = objs => document.querySelectorAll(objs)

// Set styles to the object
const setCss = (obj, styles) => {
    for(index in styles) obj.style[index] = styles[index]
}

// Get style of the object
const getCss = (obj, style) => obj.style[style]

// Create HTMLElement in document
const create = tag => document.createElement(tag)

// Check string into maximum levels, else add "..."
const checkString = (t, e) => {
    if (!(t.split("").length > e)) return t; {
        let r = "";
        t = t.split("");
        for (let l = 0; l < e; l++) r += t[l], l == e - 1 && (r += "...");
        return r
    }
};