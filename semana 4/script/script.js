function openModal(cupcake) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    switch (cupcake) {
        case "CupFlavor1Button":
            txt1.innerHTML = "Cookies And Cream";
            txt2.innerHTML = "Creme de Negresco no bolo de chocolate";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor2":
            txt1.innerHTML = "Red Velvet";
            txt2.innerHTML = "Bolo de baunilha com cobertura de cream cheese";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor3":
            txt1.innerHTML = "Chocolate com Morango";
            txt2.innerHTML = "Bolo de chocolate com recheio de morango";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor4":
            txt1.innerHTML = "Chocolate com Brigadeiro";
            txt2.innerHTML = "Bolo de chocolate com recheio de brigadeiro";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor5":
            txt1.innerHTML = "Chocolate com Nutella";
            txt2.innerHTML = "Bolo de chocolate com recheio de Nutella";
            txt3.innerHTML = "R$15,00";
            break;
        case "CupFlavor6":
            txt1.innerHTML = "Chocolate com Doce de Leite";
            txt2.innerHTML = "Bolo de chocolate com recheio de doce de leite";
            txt3.innerHTML = "R$15,00";
            break;
        default:
            txt1.innerHTML = "Cookies And Cream";
            txt2.innerHTML = "Cookies And Cream";txt1.innerHTML = "Delicioso cupkake"
            txt3.innerHTML = "R$15,00";
    }
    document.getElementById("knowMore").style.display = "inline-block";
}

function closeModal() {
    document.getElementById("knowMore").style.display = "none";
}