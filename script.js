
var contactList = [
    {
        name: "OliverQueen",
        phone: "778-555-1234",
        address: "101 Main St, Star City, USA",
        email: "greenarrow@watchtower.com",
    },
    {
        name: "JessicaCruz",
        phone: "123-555-5555",
        address: "Portland Oregon",
        email: "greenlantern@watchtower.com",
    },
    {
        name: "Tony ",
        phone: "123-666-33333",
        address: "Portland Oregon",
        email: "Tony@watchtower.com",
    }
]
var idx = 0
var main = document.querySelector(".main")


var cont = document.querySelector("#contactshome")
cont.onclick = function (e) {
    e.preventDefault();
    cleanUpIndex()
    renderIndex(contactList)
}



function cleanUpIndex() {

    main.innerHTML = ''

}

function renderIndex(contactList) {

    let innerHtml1 = ''
    for (let i = 0; i < contactList.length; i++) {
        innerHtml1 += `<a  href="javascript:;"><div class="contact"><p id="${i}" class="${contactList[i].name}">${contactList[i].name}</p></div></a>`
    }
    main.innerHTML = innerHtml1
}

renderIndex(contactList)

var createcont = document.querySelector('#newcontact')
createcont.onclick = function (e) {
    e.preventDefault();
    cleanUpView()
    renderCreate()
}

function cleanUpView() {

    main.innerHTML = ''
}
function renderView(data) {

    let innerHtml2 = ` <div class="contactinfo ${data.name}"> <div class="contactname">
        ${data.name}
        <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
    </div>
    <div class="contactemail">email:${data.email}</div>
    <div class="contactphone">cell: +${data.phone}</div>
    <div class="contactaddress">address:${data.address}</div>
    <div class="buttons">
        <button class="buttoncleanUpCreat edit"   value="Edit">Edit</button>
        <button class="button close"   value="Close">Close</button>
    </div></div> `

    main.innerHTML = innerHtml2

}
 
main.onclick = function (e) {

    let itname = e.target.className;
    console.log(itname);
    let txt='close'
    let txt2='save'
    // console.log( itname);
    if (contactList.find((item) => item.name == itname)) {
        idx = e.target.id;
        cleanUpView();
        renderView(contactList[idx])
    }
    if (itname.indexOf(txt)!=-1) {
       cleanUpIndex()
       renderIndex(contactList)
    }
    if (itname.indexOf(txt2)!=-1) {
        console.log(document.querySelector("#contactname").value,);
        let newobj={
            name: document.querySelector("#contactname").value,
            phone: document.querySelector("#contactphone").value,
            address: document.querySelector("#contactaddress").value,
            email:document.querySelector("#contactemail").value,
        }
        console.log('newobj',newobj);
        contactList.push(newobj);
        cleanUpView()
        console.log('contactList',contactList);
         renderView(contactList[contactList.length-1])

       
    }
}

function createSingleIndex() {
    var m_div = document.createElement("Tony");
    m_div.id = "indexmain";
    m_div.className = "main";
    document.body.appendChild(m_div);
}

function cleanUpCreate() {
    document.querySelector('.main').remove()
}

function renderCreate() {
     
    let innerHtml1 = ` <div class="contactedit">
    <div class="contactimg">
        <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
    </div>
    <div class="form">
        <form onsubmit="return checkLength()>
            <div class="inputcontainer">
                <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
            </div>

            <div class="inputcontainer">
                <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
            </div>

            <div class="inputcontainer">
                <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
            </div>
            
            <div class="inputcontainer">
                <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
            </div>

            <div class="buttons">
                <button   class="button save" id="savecontact"  >Save Contact</button>
                <button   class="button cancel" id="cancel"  >Cancel</button>
            </div>
        </form>
    </div>
</div>`

    main.innerHTML = innerHtml1
}
