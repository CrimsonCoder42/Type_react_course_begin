"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
//
// if (year) { // type guard
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
// 2nd example
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
