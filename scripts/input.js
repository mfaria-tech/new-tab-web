/*
 * TITLE:   input.js
 * AUTOR:   mfaria-tech
 * DATE:    09.11.2022
 * 
 * DESCRIPTION:
 *      roles and actions to input element
 */


// Sintaxe strict mode para todo o script
"use strict";


// Valida se o argumento inserido possui a estrutura de uma URL
function CheckURLStructure (url) {
    let res = false;
    
    const RGX_PROT  = new RegExp(/(\w{3}\:\/\/)/, "gm");
    const RGX_DOMAIN = new RegExp(/(\w\.\w{2})/, "gm");
    
    
    // variaveis do tipo booleano
    // validam o texto a partir dos regex declarados
    let protvalid = RGX_PROT.test(url);
    let domainvalid = RGX_DOMAIN.test(url);

    
    if(protvalid || domainvalid) {
        if(!protvalid) {
            if(domainvalid) {
                const RGX_PREF = new RegExp(/(\W\w{2})/, "gm");
                let iurl = url.substr(0, 5).search(RGX_PREF);
            
                if(iurl !== -1)
                url = url.substr(iurl + 1);
            
                url = "https://" + url;
            }
        }

        // Atualizar variavel txtSearch, 
        // que será utilizado para redirecionamento de URL
        txtSearch = url;
        
        res = true;
    }
    
    return res;
}


// Extrair strings e converter num argumento valido para o google
function ExtractAndConvertValidArg(query) {
    let lstStr = query.split(" ");
    let arg = "";

    for(let i in lstStr) {
        arg += lstStr[i] + "+";
    }

    // Remover o último char "+"
    arg = arg.substring(0, arg.length - 1);


    // atualizar o argumento para a forma completa
    // retornar argumento
    arg = `q=${arg}&oq=${arg}&sourceid=chrome&ie=UTF-8`

    return arg
}


// Valida se a chave selecionada é um ENTER e aciona a pesquisa
function EnterSearch (el) {
    txtSearch = this.value.trim();
    
    if(txtSearch !== "")
        if(el.key === "Enter") {
            if(CheckURLStructure(txtSearch))
                window.location.href = txtSearch;
            else
                window.location.href = "https://www.google.com/search?" + ExtractAndConvertValidArg(txtSearch);
        }    
}


/// =====================================================
///  Sequencia para adicionar o observer de keydown
///  e validar o valor inserido no input
///
let input = document.getElementById("input__search");
let txtSearch;

if(input) {
    input.addEventListener('keydown', EnterSearch);
}

