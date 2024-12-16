var new_shop_name = "Cookie Clicker";
var cookie_count = 0;
var add_per_click = 1;
var cost_per_upgrade = 500;

console.log(screen.width);

function renameShop(){
    while (true){
        new_shop_name = prompt("Rename Shop: ");
        if (new_shop_name){
            document.getElementById("shop_name").innerHTML = new_shop_name;
            break;
        }
        else{
            continue;
        }
    }
}

function addCounter(){
    cookie_count += add_per_click;
    document.getElementById("score").innerHTML = cookie_count + "<br> cookies"
}

function goldenCookie(){
    document.body.style.overflow = 'hidden';
    let cookie = document.createElement("img");
    cookie.style.height = '100px';
    cookie.style.width = '100px';
    cookie.src = '../Images/golden-cookie.png'
    cookie.style.position = 'absolute'
    cookie.draggable = false;
    cookie.setAttribute('id', 'golden_cookie')

    let max_width = screen.width/3.5;
    let max_height = screen.height;

    let x = Math.floor(Math.random() * max_width) + "px";

    cookie.style.top = 0;
    cookie.style.left = x;

    document.body.appendChild(cookie);

    cookie.addEventListener('click', () => {
        cookie_count += 1000;
        document.getElementById("score").innerHTML = cookie_count + "<br> cookies";
        document.body.removeChild(cookie);
    })

    for (let i = 0; i < max_height/10; i++) {
        setTimeout(() => {
            let currentTop = parseInt(cookie.style.top);
            cookie.style.top = (currentTop + 10) + 'px';

            if (parseInt(cookie.style.top) == max_height){
                document.body.removeChild(cookie);
            }
        }, 20*i);
    }

}

function upgrade_click(){
    console.log(add_per_click);
    if (cookie_count >= cost_per_upgrade){
        cookie_count -= cost_per_upgrade
        add_per_click += 5;
        cost_per_upgrade += cost_per_upgrade;
        console.log(add_per_click);
        document.getElementById("upgrade_benefit").innerHTML = add_per_click + " cookies/click"
        document.getElementById("upgrade_click_cost").innerHTML = cost_per_upgrade + " cookies"
    }
}