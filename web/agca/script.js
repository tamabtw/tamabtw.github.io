let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]
let r0 = document.getElementById("r0")
let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")
let r3 = document.getElementById("r3")
let r4 = document.getElementById("r4")
let r5 = document.getElementById("r5")

function calculatorAge() {
    let birthDate = new Date(userInput.value)

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()

    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3

    y3 = y2 - y1

    if (m2 >= m1) {
        m3 = m2 - m1
    } else {
        y3--
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1
    } else {
        m3--
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    }

    if (m3 < 0) {
        m3 = 11
        y3--
    }

    let detik
    let menit
    let jam
    let hari
    let minggu
    let bulan
    let tahun

    detik = (y3 * 360) * 86400
    menit = (y3 * 360) * 1440
    jam = (y3 * 360) * 24
    hari = y3 * 360
    minggu = y3 * 48
    bulan = y3 * 12
    tahun = y3

    r0.innerHTML = `Usia kamu adalah ${y3} tahun, ${m3} bulan, ${d3} hari.`
    r1.innerHTML = `${detik} Detik.`
    r2.innerHTML = `${menit} Menit.`
    r3.innerHTML = `${jam} Jam.`
    r4.innerHTML = `${hari} Hari.`
    r5.innerHTML = `${minggu} Minggu.`
    r6.innerHTML = `${bulan} Bulan.`
    r7.innerHTML = `${tahun} Tahun.`
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}