function calculate(){
    var total = parseFloat(document.getElementById("total").value); 
    var discount_percentage = parseFloat(document.getElementById("discount").value); 
    if (!isNaN(total) && !isNaN(discount_percentage)){ 
        if (total > 0){
            if (discount_percentage > 0 && discount_percentage < 100){ 
                var discount = parseFloat((total * discount_percentage) / 100); 
                var result = parseFloat(total - discount); 
                var parent = document.getElementById("parent"); 
                for(var x=parent.children.length-1;x>0;x--){  
                    if (parent.children[x].id == "welcome-text"){ 
                        continue 
                    }
                    parent.children[x].remove();
                }
                function CreateComp(classname1, classname2){
                    var comp = document.createElement("div");
                    comp.className += classname1;
                    parent.appendChild(comp);
                    var compChild = document.createElement("p");
                    compChild.className += classname2;
                    comp.appendChild(compChild);
                    return compChild;
                }
                var comp1 = CreateComp("total-out", "text-start mt-3")
                comp1.innerHTML = ("Toplam Tutar : " + total);
                var comp2 = CreateComp("discount-percentage-out", "text-start mt-3")
                comp2.innerHTML = ("İskonto Yüzdesi : " + discount_percentage);
                var comp3 = CreateComp("discount-out", "text-start mt-3")
                comp3.innerHTML = ("Uygulanan İskonto : " + discount);
                var comp3 = CreateComp("result-out", "text-start mt-3")
                comp3.innerHTML = ("İskontolu Toplam Tutar : " + result);
                
                var againButtonParent = document.createElement("div");
                againButtonParent.className += "container text-center";
                parent.appendChild(againButtonParent);
                var againButton = document.createElement("button");
                againButton.className += "btn btn-primary mx-auto mt-3";
                againButtonParent.appendChild(againButton);
                againButton.innerHTML = "Başka Bir Hesaplama Yap"
                againButton.onclick = function(){location.reload();}

                var comp3 = CreateComp("result-out", "text-center mt-5 mb-0")
                comp3.innerHTML = ("Bu araç Görkem Güder tarafından programlanmıştır.");
            }
            else {
                alert("İskonto yüzdesi 1-99 arasında olmalıdır.");
            }
        }
        else {
            alert("Toplam tutar 0 olamaz.");
        }
    }
    else {
        alert("Boş bıraktığınız alan/alanlar var veya girdiğiniz bilgilerin tipi doğru değil."); // bos alan veya alanlar varsa uyarı verir.
    }
}