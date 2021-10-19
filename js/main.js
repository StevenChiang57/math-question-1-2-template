function check_acorn_1(){
    var values = document.getElementsByName('acorn_1')

    for(i = 0; i < values.length; i++){
        if(values[i].checked && values[i].value == 6){
            document.getElementById('btn_list_1').style.borderColor = "green";
            document.getElementById('acorn_1_msg').style.color = "green"
            document.getElementById('acorn_1_msg').innerText = "Correct! The tree has 6 acorns.";
            document.getElementById('acorn_img_1').src="https://i.imgur.com/CnDBbmp.png"
        }
        else if (values[i].checked){
            document.getElementById('btn_list_1').style.borderColor = "red";
            document.getElementById('acorn_1_msg').style.color = "red"
            document.getElementById('acorn_1_msg').innerText = "Look again carefuly. Here are some red arrows to help.";
            document.getElementById('acorn_img_1').src="https://i.imgur.com/BwgAPYT.png"
        }
    }
}

function check_acorn_2(){
    var values = document.getElementsByName('acorn_2')

    for(i = 0; i < values.length; i++){
        if(values[i].checked && values[i].value == 4){
            document.getElementById('btn_list_2').style.borderColor = "green";
            document.getElementById('acorn_2_msg').style.color = "green"
            document.getElementById('acorn_2_msg').innerText = "Correct! The tree now has 4 acorns.";
            document.getElementById('acorn_img_2').src="https://i.imgur.com/xg1Kz9j.png"

        }
        else if (values[i].checked){
            document.getElementById('btn_list_2').style.borderColor = "red";
            document.getElementById('acorn_2_msg').style.color = "red"
            document.getElementById('acorn_2_msg').innerText = "Look again carefuly. Don't count the acorns with the squirrel.";
            document.getElementById('acorn_img_2').src="https://i.imgur.com/XLcbhiQ.png"
        }
    }
}

function check_bee_1(){
    var values = document.getElementsByName('bee_1')

    for(i = 0; i < values.length; i++){
        if(values[i].checked && values[i].value == 9){
            document.getElementById('btn_list_3').style.borderColor = "green";
            document.getElementById('bee_1_msg').style.color = "green"
            document.getElementById('bee_1_msg').innerText = "Correct! The field has 9 flowers.";
            document.getElementById('bee_img_1').src="https://i.imgur.com/YVaXyFA.png"
        }
        else if (values[i].checked){
            document.getElementById('btn_list_3').style.borderColor = "red";
            document.getElementById('bee_1_msg').style.color = "red"
            document.getElementById('bee_1_msg').innerText = "Look again carefuly. Here are some red arrows to help.";
            document.getElementById('bee_img_1').src="https://i.imgur.com/e23fmlF.png"
        }
    }
}

function check_bee_2(){
    var values = document.getElementsByName('bee_2')

    for(i = 0; i < values.length; i++){
        if(values[i].checked && values[i].value == 3){
            document.getElementById('btn_list_4').style.borderColor = "green";
            document.getElementById('bee_2_msg').style.color = "green"
            document.getElementById('bee_2_msg').innerText = "Correct! The field has 3 bees.";
            document.getElementById('bee_img_2').src="https://i.imgur.com/hmdxJW3.png"
        }
        else if (values[i].checked){
            document.getElementById('btn_list_4').style.borderColor = "red";
            document.getElementById('bee_2_msg').style.color = "red"
            document.getElementById('bee_2_msg').innerText = "Look again carefuly. Only count the bees.";
            document.getElementById('bee_img_2').src="https://i.imgur.com/7YZL9Lp.png"
        }
    }
}

function check_bee_3(){
    var values = document.getElementsByName('bee_3')

    for(i = 0; i < values.length; i++){
        if(values[i].checked && values[i].value == 3){
            document.getElementById('btn_list_5').style.borderColor = "green";
            document.getElementById('bee_3_msg').style.color = "green"
            document.getElementById('bee_3_msg').innerText = "Correct! Every bee will collect honey from 3 flowers.";
            document.getElementById('bee_img_3').src="https://i.imgur.com/AET5NFI.png"
        }
        else if (values[i].checked){
            document.getElementById('btn_list_5').style.borderColor = "red";
            document.getElementById('bee_3_msg').style.color = "red"
            document.getElementById('bee_3_msg').innerText = "Look again carefuly. Count the flowers for each bee";
            document.getElementById('bee_img_3').src="https://i.imgur.com/UDdf7Lz.png"
        }
    }
}

module.exports = {check_acorn_1, check_acorn_2, check_bee_1, check_bee_2, check_bee_3}