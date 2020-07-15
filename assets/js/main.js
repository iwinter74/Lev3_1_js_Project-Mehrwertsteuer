let nettoToBrutto = true
document.getElementById("type").innerHTML = `<h1>Nettobetrag (Preis ohne Mehrwertsteuer) in Euro</h1>
    <input type="text" name="" id="input"></input>`
document.getElementById("final").innerHTML = `<h1>Bruttobetrag (Endpreis):</h1>`

function toBrutto() {
    console.log("test to brutto")
    document.getElementById("type").innerHTML = `<h1>Nettobetrag (Preis ohne Mehrwertsteuer) in Euro</h1>
    <input type="text" name="" id="input"></input>`
    nettoToBrutto = true
    console.log(nettoToBrutto)
    return nettoToBrutto

} 
function toNetto() {
    console.log("test")
    document.getElementById("final").innerHTML = `<h1>Nettobetrag:</h1>`
    document.getElementById("type").innerHTML = `<h1>Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro</h1>
        <input type="text" name="" id="input">`
    nettoToBrutto = false
    console.log(nettoToBrutto)
    return nettoToBrutto
}
let percent = 19/100
function nineteen() {
    console.log(percent)
    percent = 19 / 100
    console.log(percent)
}
function seven() {
    console.log(percent)
    percent = 7 / 100
    console.log(percent)
}
function mwSt() {
    console.log("je teste")
    if (nettoToBrutto) {
        console.log("Je suis dans le block")
        console.log(percent)
        let netto = document.getElementById("input").value
        netto = Number(netto)
        console.log(netto)
        let brutto = netto * (1 + percent)
        brutto = brutto.toFixed(2)
        console.log(brutto)
        let steuer = netto * percent
        console.log(steuer)
        steuer = steuer.toFixed(2)
        document.getElementById("steuer").innerHTML = steuer + "€ "
        document.getElementById("final").innerHTML = `<h1>Bruttobetrag (Endpreis):</h1> ${brutto} €`
    } else if (nettoToBrutto == false) {
        console.log("Je suis dans le block netto to brutto")
        console.log(percent)
        let brutto = document.getElementById("input").value
        brutto = Number(brutto)
        console.log(brutto)
        let netto = brutto / (1 + percent)
        netto = netto.toFixed(2)
        console.log(netto)
        let steuer = netto * percent
        console.log(steuer)
        steuer = steuer.toFixed(2)
        document.getElementById("steuer").innerHTML = steuer + " €"
        document.getElementById("final").innerHTML = `<h1>Nettobetrag:</h1> ${netto} €`
    }
}
function myReset() {
    console.log("ok")
    document.getElementById("input").value = ""
}
  
